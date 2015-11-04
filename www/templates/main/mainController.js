angular.module('mainController', [])

.controller('MainCtrl', function($scope, MyService) {
  $scope.users = MyService.query();
  console.log($scope.users);
});
