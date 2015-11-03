angular.module('services', [])

.service('MyService', function($http) {
  var url = 'https://randomuser.me/api/?results=5';
  var users = '';
  return {
    all: function() {
      return $http.get(url)
        .then(function(responce) {
          users = responce.data.results;
          console.log(users);
          return users
        });
    },
    get: function(userIndex) {
      return users[userIndex];
    }
  };
})
