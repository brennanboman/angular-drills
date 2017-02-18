angular.module('arrayApp').controller('arrayController', function($scope, arrayService) {

$scope.users = arrayService.myData;

})
