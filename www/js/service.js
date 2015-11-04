angular.module('services', [])

.service('MyService', function($resource) {
  return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
})
