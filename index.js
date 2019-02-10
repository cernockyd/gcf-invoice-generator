require('@google-cloud/debug-agent');
const fs = require('fs');
const pdf = require('html-pdf');
const uuidv4 = require('uuid/v4');
const renderTemplate = require('./template');

const dirname = 'file://' + __dirname + '/';

function getAccessToken(header) {
    if (header) {
        var match = header.match(/^Bearer\s+([^\s]+)$/);
        if (match) {
            return match[1];
        }
    }
    return null;
}

function createPDF(html) {
    return new Promise(function(resolve, reject) {

        let file_name = '/tmp/'+uuidv4() + '.pdf';

        const options = {
            'base': dirname,
            'quality': '100',
            'format': 'A4'
        };

        pdf.create(html, options).toFile(file_name, function(err) {
            if (err) {
                reject('Error: something goes wrong ! '+ err);
            } else {
                resolve(file_name);
            }
        });

    });
}

function authorized(req, res) {

    let data = req.body;

    data.dirname = dirname;

    // todo: check/validate data

    const html = renderTemplate(data);

    createPDF(html)
    .then(function(file_name){
        res.writeHead(200, {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": "attachment; filename=" + file_name
        });
        fs.createReadStream(file_name).pipe(res);
    })
    .catch( function(error) {
        console.error("Failed!" + error);
        res.status(400).send("Error: Pdf generation failed!");
    });
}

/**
 * Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.generateInvoice = function generateInvoice(req, res) {
    console.log('this is the request');
    console.log(req);

    // todo: check authorization JWT, eventually cors
    // var accessToken = getAccessToken(req.get('Authorization'));

    authorized(req, res);
};