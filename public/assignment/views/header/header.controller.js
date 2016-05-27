/**
 * Created by Rammer on 5/18/16.
 */

/**
(function () {
    'use strict';
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $rootScope, $location) {

        $scope.logout = logout;

        function logout() {
            $rootScope.currentUser = null;
            $location.url("/home");
        }
    }
});
 **/

app.controller('HeaderController', function($scope, $rootScope, $location){

    $scope.HeaderController = function() {
        $scope.logout = logout;

        function logout() {
            $rootScope.currentUser = null;
            $location.url("/home");
        }
    }
});