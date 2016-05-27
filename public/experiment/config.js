/**
 * Created by Rammer on 5/26/16.
 */

    /**
var app = angular.module('HelloApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/welcome", {
            templateUrl: "welcome.view.html"
        })
        .otherwise("/")
});
**/

    (function(){
        angular
            .module("HelloApp", ["ngRoute"])
            .config(function($routeProvider){
                $routeProvider
                    .when("/welcome", {
                        templateUrl: "welcome.view.html"
                    })
                    .otherwise({
                        redirectTo: "/"
                    });
            });
    })();