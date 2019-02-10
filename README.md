# gcf-invoice-generator

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