var express = require('express');
var path = require('path');

const app = express();
const host = `0.0.0.0`
const port = "5432"

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile('json-to-cucumber.html', { root: path.join(__dirname, '../') });
});

async function start() {
  // Listen the server
  app.listen(port, host);
}
start();