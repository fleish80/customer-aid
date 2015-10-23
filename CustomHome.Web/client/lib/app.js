var app = angular.module('customAidApp', ['ui.router', 'ngMaterial', 'uiGmapgoogle-maps'])


.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
    GoogleMapApi.configure({
        //    key: 'your api key',
        // v: '3.20',
        libraries: 'places',
        language: 'he'
    });
}]);