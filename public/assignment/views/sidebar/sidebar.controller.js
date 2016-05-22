/**
 * Created by Rammer on 5/18/16.
 */

(function(){
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", sidebarController);

    function sidebarController($location) {
        var foo = this;

        function init() {
            foo.$location = $location;
        }
        init();
    }
})();