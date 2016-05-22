/**
 * Created by Rammer on 5/18/16.
 */

(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", headerController);

    function headerController($location, UserService) {
        var foo = this;

        foo.logout = logout;

        function init() {
            foo.$location = $location;
        }
        init();

        function logout() {
            UserService
                .logout()
                .then(function() {
                    UserService.setCurrentUser(null);
                    $location.url("/home");
                });
        }
    }
})();