function getFolders(callback)
{
  global.MongoMailModel.find({}, function (err, mails){
    if (err) throw err;
    else
      {
          var folders = [{
                  	"value": "RECEPTION",
                  	"label": "Boite de Reception",
                  	"emails": null
                  }, {
                  	value: "ENVOYES",
                  	label: "Messages Envoyes",
                  	emails: [{
                  		id: 7,
                  		from: "Albator",
                  		to: "Rudy",
                  		subject: "Je reviens",
                  		date: "23/02/2015",
                  		content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  	}, {
                  		id: 8,
                  		from: "Albator",
                  		to: "Rudy",
                  		subject: "Je reviens",
                  		date: "23/02/2015",
                  		content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  	}, {
                  		id: 9,
                  		from: "Albator",
                  		to: "Rudy",
                  		subject: "Je reviens",
                  		date: "23/02/2015",
                  		content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  	}]
                  }, {
                  	value: "SPAM",
                  	label: "Spams",
                  	emails: [{
                  		id: 10,
                  		from: "Albator",
                  		to: "Rudy",
                  		subject: "Je reviens",
                  		date: "23/02/2015",
                  		content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  	}, {
                  		id: 11,
                  		from: "Albator",
                  		to: "Rudy",
                  		subject: "Je reviens",
                  		date: "23/02/2015",
                  		content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  	}, {
                  		id: 12,
                  		from: "Albator",
                  		to: "Rudy",
                  		subject: "Je reviens",
                  		date: "23/02/2015",
                  		content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  	}]
              }];
              folders[0].emails = mails;
          callback(folders);
      }
  });
}

function getMails(callback)
{
  global.MongoMailModel.find({}, function (err, mails){
    if (err) throw err;
    else
      callback(mails);
  });
}

function addMail(newMail, callback)
{
  var mail = new global.MongoMailModel(newMail);
  mail.save(function (err, mail) {
    if (err) throw err;
    callback(mail);
  });
}

module.exports = {getMails: getMails, addMail: addMail, getFolders: getFolders};
