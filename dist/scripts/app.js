(function() {
     function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('homePage', {
            controller: 'HomeCtrl as home',
            url:'/',
            templateUrl:'/templates/home.html'
        });
            
    }
        
angular
    .module('blocChat', ['firebase', 'ui.router']) 
    .config(config);

})();