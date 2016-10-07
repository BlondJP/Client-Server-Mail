angular.module("Webmail", [])
.controller("WebmailController", function ($scope, $location, $http){

  $scope.folders = [{
	"value": "RECEPTION",
	"label": "Boite de Reception",
	"emails": [{
		"id": 1,
		"from": "Albator",
		"to": "Rudy",
		"subject": "Je reviens",
		"date": "23/02/2015",
		"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},  {
		"id": 3,
		"from": "Albator",
		"to": "Rudy",
		"subject": "Je reviens",
		"date": "23/02/2015",
		"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}]
}, {
	"value": "ARCHIVES",
	"label": "Archives",
	"emails": [{
		"id": 4,
		"from": "Albator",
		"to": "Rudy",
		"subject": "Je reviens",
		"date": "23/02/2015",
		"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"id": 5,
		"from": "Albator",
		"to": "Rudy",
		"subject": "Je reviens",
		"date": "23/02/2015",
		"content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		id: 6,
		from: "Albator",
		to: "Rudy",
		subject: "Je reviens",
		date: "23/02/2015",
		content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}]
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

  $scope.currentFolder = null;


  $scope.selectFolder = function (folder){
    $scope.currentFolder = folder;
    $scope.nbMails = folder.emails.length;
    $scope.activeForm = false;
  };

  $scope.currentEmail = null;

  $scope.selectEmail = function (email){
    $scope.currentEmail = email;
  };

  $scope.activeForm = false;
  $scope.showForm = function(){
    $scope.activeForm = true;
    $scope.currentFolder = null;
    $scope.currentEmail = null;
    console.log('on va fficher le form');
  }


  $scope.newMail = {from: null, to: null, object: null, content: null};

  $scope.treatForm = function (){
    $http.post('form.php', JSON.stringify($scope.newMail)).success(function(){ alert("Votre E-mail a bien été envoyé."); });

   };

});
