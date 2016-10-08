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

/* Utilisation de MongoDB */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mails');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var mailSchema = mongoose.Schema({
      to: String, from: String, object: String, content: String
  });
  var MongoMailModel = mongoose.model('Mail', mailSchema);
  global.MongoMailModel = MongoMailModel;


  var port = 3000;
  app.listen(port, function () {
    console.log('JPMail server listening on port '+port+' ...');
  });


});
