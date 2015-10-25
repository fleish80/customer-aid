angular.module("customAidApp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {

      // For any unmatched url, send to 404
      $urlRouterProvider.otherwise('/404');

      $stateProvider
      .state('map', {
          url: '/',
          templateUrl: 'client/views/map.ng.html',
          controller: 'mapCtrl'
      })
      .state('details', {
          url: '/:businessNumber',
          templateUrl: 'client/views/details.ng.html',
          controller: 'detailsCtrl',
      });
      $urlRouterProvider.when('', '/');
      $urlRouterProvider.otherwise('/404');
  }]);