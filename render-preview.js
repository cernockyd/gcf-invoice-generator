const fs = require('fs');

let renderTemplate = require('./template');

const dirname = 'file://' + __dirname + '/';

const data = {
    id: 'ID',
    dateIssue: 'date issue',
    dateDue: 'date due',
    companyAddressLines: [
        'something1',
        'something2',
        'something3',
        'VAT Reg no: something4'
    ],
    userAdressLines: [
        'somethingA',
        'somethingB',
        'VAT Reg no: somethingC'
    ],
    item: {
        name: 'name',
        price: 'total price including currency sign'
    },
    status: 'PAID'
};

data.dirname = dirname;

fs.writeFile('./preview.html', renderTemplate(data), function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("The HTML invoice file was saved!");
});
