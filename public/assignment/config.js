/**
 * Created by Rammer on 5/18/16.
 */
/**
"use strict";
(function() {
    angular
        .module("FormBuilderApp", ["ngRoute"])
        .config(function($routeProvider) {
           $routeProvider
               .when("/", {
                templateUrl: "home.view.html"
            })
            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller: "RegisterController"
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/profile", {
                templateUrl: "views/users/profile.view.html",
                controller: "ProfileController"
            })
            .when("/admin", {
                templateUrl: "views/users/admin.view.html"

            })
            .when("/home", {
                templateUrl: "views/home/home.view.html",
                controller: "MainController"
            })
            .when("/forms", {
                templateUrl: "views/forms/forms.view.html",
                controller: "FormController"
            })
            .when("/form-fields", {
                templateUrl: "views/forms/form-fields.view.html",
                controller: "Form-FieldsController"
            })
            .otherwise("/home")
            });
})();
 **/

(function () {

    angular.module('FormBuilderApp')
        .config(function($routeProvider) {
        $routeProvider
            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller: "RegisterController"
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/profile", {
                templateUrl: "views/users/profile.view.html",
                controller: "ProfileController"
            })
            .when("/admin", {
                templateUrl: "views/users/admin.view.html"

            })
            .when("/home", {
                templateUrl: "views/home/home.view.html",
                controller: "MainController"
            })
            .when("/forms", {
                templateUrl: "views/forms/forms.view.html",
                controller: "FormController"
            })
            .when("/form-fields", {
                templateUrl: "views/forms/form-fields.view.html",
                controller: "Form-FieldsController"
            })
            .otherwise({
                redirectTo: "/home"
            })
    })
})();
