# Google Cloud Function Invoice Generator

Simple invoice generator that takes HTML template and generates invoice based on JSON input. Example template uses [sparksuite/simple-html-invoice-template](https://github.com/sparksuite/simple-html-invoice-template).

![screenshot](examples/example-screenshot.png)


## Demo

Find [PDF demo here](examples/example.pdf).


## Get started

See preview in browser
```bash
node render-preview.js && open preview.html
```

Deploy
- replace `BUCKET_NAME`

```bash
gcloud beta functions deploy generateInvoice --stage-bucket BUCKET_NAME --trigger-http
```

Usage
- replace `GCF_URL`

```bash
curl -X POST "GCF_URL" -H "Content-Type:application/json" --data '{"id":"ID","dateIssue":"date issue","dateDue":"date due","companyAddressLines":["neco1","neco2","neco3","VAT Reg no: neco4"],"userAdressLines":["necoA","necoB","VAT Reg no: necoC"],"item":{"name":"nazev","price":"cena včetně znaku"},"status":"PAID"}' > test-invoice.pdf
```


## Font license
Used font in this repository is [Roboto](https://fonts.google.com/specimen/Roboto), licensed under [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)