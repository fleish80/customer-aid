angular.module("customAidApp").controller("mapCtrl", ['$scope', 'uiGmapGoogleMapApi',
  function ($scope, uiGmapGoogleMapApi) {

      $scope.searchbox = {
          template: 'searchbox.tpl.html',
          //position:'top-right',
          position: 'top-left',
          options: { bounds: {} },
          //parentdiv:'searchBoxParent',
          events: {
              places_changed: function (searchBox) {
                  places = searchBox.getPlaces()

                  if (places.length == 0) {
                      return;
                  }
                  else {
                      $scope.map.center = {
                          latitude: places[0].geometry.location.lat(),
                          longitude: places[0].geometry.location.lng(),
                      }
                  }
              }
          }
      };

      uiGmapGoogleMapApi.then(function (maps) {
          $scope.map = {
              center: {
                  latitude: 31.9522, longitude: 34.8121
              },
              zoom: 15
          };
          $scope.markers = [
              { "latitude": 3.9908431028576365, "longitude": -92.86828979738675, "title": "m0", "id": 0 },
              { "latitude": 3.9908431028576365, "longitude": -92.86828979738675, "title": "m0", "id": 0 },
              { "latitude": 3.9908431028576365, "longitude": -92.86828979738675, "title": "m0", "id": 0 },
              { "latitude": 3.9908431028576365, "longitude": -92.86828979738675, "title": "m0", "id": 0 }
          ];

          $scope.business = {
              name: 'המכולת השכונתית',
              number: '1234567890'
          };

          $scope.defaultBounds = new google.maps.LatLngBounds(
              new google.maps.LatLng(0, 0),
              new google.maps.LatLng(0, 0));

          $scope.searchbox.options.bounds = new google.maps.LatLngBounds($scope.defaultBounds.getNorthEast(), $scope.defaultBounds.getSouthWest());
      });
  }]);