(function () {
    "use strict";
    //bakery module includes public module as dependency
    angular.module('bakery', ['ui.router']);

    angular.module('bakery')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/home.html'
            })
            .state('menu', {
                url: '/menu',
                templateUrl: 'src/menu.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'src/about.html'
            })
            .state('menu.cupcakes', {
                url: '/cupcakes',
                templateUrl: 'src/menu-categories/cupcakes.html'
            })
            .state('menu.cake-flavors', {
                url: '/cupcakes',
                templateUrl: 'src/menu-categories/cake-flavors.html'
            })
            .state('menu.icing-flavors', {
                url: '/cupcakes',
                templateUrl: 'src/menu-categories/icing-flavors.html'
            });


    }
})();