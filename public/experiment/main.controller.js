/**
 * Created by Rammer on 5/26/16.
 */

var app = angular.module('HelloApp', ["ngRoute"]);

app.controller('MainController', function($scope, $location){

    $scope.MainController = function() {
        $scope.$location = $location;
    }
});
