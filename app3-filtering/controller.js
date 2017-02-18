angular.module('filterApp').controller('ctrlFilter', function($scope, servFilter) {

$scope.users = servFilter.myData;

$scope.test = "working"

})
