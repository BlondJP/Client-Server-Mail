var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

/* Inclusion du Front */
app.use("/", express.static(path.join(__dirname, 'front')));

/* Utilisation de Body-Parser */
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

/* Inclusion du Back */
require('./back/routes')(app);

var port = 3000;
app.listen(port, function () {
  console.log('JPMail server listening on port '+port+' ...');
});
