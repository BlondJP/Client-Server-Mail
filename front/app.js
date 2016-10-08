angular.module("Webmail", [])
.controller("WebmailController", function ($scope, $location, $http){

  $http.get('/folder').then(function successCallback(response) {
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
    $http.post('/mail', JSON.stringify($scope.newMail)).success(function(justCreatedMail){
      $scope.folders[0].emails.push(justCreatedMail);
     });
   };

  $scope.removeMail = function (mail){
    /* Actualise la vue*/
    var index = $scope.folders[0].emails.indexOf(mail);
    $scope.folders[0].emails.splice(index, 1);
    /* AJAX */
    $http.delete('/mail/'+mail._id).success(function(justDeletedId){ console.log(justDeletedId); $scope.nbMails--;});
  }

});
