angular.module('detailController', [])

.controller('DetailCtrl', function($scope, $stateParams, MyService) {
  $scope.user = MyService.get({ user: $stateParams.userId })
})
