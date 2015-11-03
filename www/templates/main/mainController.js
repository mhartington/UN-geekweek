angular.module('mainController', [])

.controller('MainCtrl', function($scope, MyService) {
  $scope.users = [];
  MyService.all().then(function(data) {
    $scope.users = data;
  });
});
