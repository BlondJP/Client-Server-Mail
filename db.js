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

  /*var mail = new MongoMailModel({to:'chris', from:'me', object:'LOL', content:'lol'});
  mail.save(function (err, mail) {
  if (err) return console.error(err);
  console.log(mail);
  MongoMailModel.find(function (err, mails) {
    if (err) return console.error(err);
    console.log(mails);
  })
});*/

});
