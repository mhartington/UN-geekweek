angular.module('services', [])

  .service('MyService', function ($http) {
    var url = 'https://randomuser.me/api/?results=5'
    return {
      all: function () {
        return $http.get(url)
          .then(function (responce) {
            return responce.data.results;
          });
      }
    };
  })