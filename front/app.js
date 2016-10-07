angular.module("Webmail", [])
.controller("WebmailController", function ($scope, $location, $http){

  $http.get('/mail').then(function successCallback(response) {
    $scope.folders = response.data;
  }, function errorCallback(response) {
    if (response)
      console.log('error : ',response);
  });


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
    $http.post('/mail', JSON.stringify($scope.newMail)).success(function(){ alert("Votre E-mail a bien été envoyé."); });

   };

});
