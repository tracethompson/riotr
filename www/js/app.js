angular.module('riotr', ['ionic', 'riotr.controllers', 'riotr.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('riotr', {
    url: "/riotr",
    abstract: true,
    templateUrl: "templates/header-footer.html",
    controller: 'MapCtrl'
  })

  .state('riotr.map', {
    url: "/map",
    views: {
      'map@': {
        templateUrl: "templates/map.html"
      }
    }
  })

  $urlRouterProvider.otherwise('/riotr/map');
});
