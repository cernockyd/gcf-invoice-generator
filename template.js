module.exports = (props) => `
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Invoice</title>

    <style>

    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url('${props.dirname}fonts/Roboto-Regular.ttf');
    }

    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 600;
      src: url('${props.dirname}fonts/Roboto-Medium.ttf');
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    .invoice-box {
        max-width: 800px;
        margin: auto;
        padding: 30px;
        font-size: 12px;
        line-height: 18px;
        font-family: 'Roboto', sans-serif;
        color: #555;
    }

    .invoice-box table {
        width: 100%;
        line-height: inherit;
        text-align: left;
    }

    .invoice-box table td {
        padding: 5px;
        vertical-align: top;
    }

    .invoice-box table tr td:nth-child(2) {
        text-align: right;
    }

    .invoice-box table tr.top table td {
        padding-bottom: 20px;
    }

    .invoice-box table tr.top table td.title {
        font-size: 14px;
        line-height: 45px;
        color: #333;
    }

    .invoice-box table tr.information table td {
        padding-bottom: 40px;
    }

    .invoice-box table tr.heading td {
        background: #eee;
        border-bottom: 1px solid #ddd;
        font-weight: 600;
    }

    .invoice-box table tr.details td {
        padding-bottom: 20px;
    }

    .invoice-box table tr.item td{
        border-bottom: 1px solid #eee;
    }

    .invoice-box table tr.item.last td {
        border-bottom: none;
    }

    .invoice-box table tr.total td:nth-child(2) {
        border-top: 2px solid #eee;
        font-weight: 600;
    }

    @media only screen and (max-width: 600px) {
        .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
        }

        .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
        }
    }

    .paid {
        color: green;
        font-weight: 600;
        font-size: 14px;
        border: 1px solid green;
        border-radius: 6px;
        display: inline-block;
        margin-top: 12px;
        padding: 6px 12px;
    }

    /** RTL **/
    .rtl {
        direction: rtl;
        font-family: 'Roboto', sans-serif;
    }

    .rtl table {
        text-align: right;
    }

    .rtl table tr td:nth-child(2) {
        text-align: left;
    }
    </style>
</head>

<body>
    <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <img src="logo.png" style="width: 100%; max-width: 120px;">
                            </td>

                            <td>
                                Invoice ID: ${props.id}<br>
                                Issue date: ${props.dateIssue}<br>
                                Due date: ${props.dateDue}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                ${props.companyAddressLines.map(function(line, index) {
                                    linesCount = props.companyAddressLines.length;
                                    if (linesCount > index) {
                                        return `${line}<br>`
                                    } else {
                                        return `${line}`
                                    }
                                }).join("")}
                            </td>

                            <td>
                                ${props.userAdressLines.map(function(line, index) {
                                    linesCount = props.userAdressLines.length;
                                    if (linesCount > index) {
                                        return `${line}<br>`
                                    } else {
                                        return `${line}`
                                    }
                                }).join("")}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr class="heading">
                <td>
                    Item
                </td>

                <td>
                    Price
                </td>
            </tr>

            <tr class="item last">
                <td>
                    ${props.item.name}
                </td>

                <td>
                    ${props.item.price}
                </td>
            </tr>

            <tr class="total">
                <td></td>

                <td>
                   Total: ${props.item.price}
                </td>
            </tr>
            ${props.status == 'PAID' ?
            `<tr>
                <td></td>

                <td>
                   <span class="paid">Invoice is ${props.status}</span>
                </td>
            </tr>` : ``}
        </table>
    </div>
</body>
</html>`;