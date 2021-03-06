﻿angular.module("customAidApp")
    .controller("mapCtrl", ['$scope', 'uiGmapGoogleMapApi',
          function ($scope, uiGmapGoogleMapApi) {
              $scope.searchbox = {
                  template: 'searchbox.tpl.html',
                  position: 'top-center',
                  options: { bounds: {} },
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
                          latitude: 32.108263, longitude: 34.803448
                      },
                      zoom: 15,
                      bounds: {},
                      randomMarkers: randomMarkers
                  };

                  $scope.defaultBounds = new google.maps.LatLngBounds(
                      new google.maps.LatLng(0, 0),
                      new google.maps.LatLng(0, 0));

                  $scope.searchbox.options.bounds = new google.maps.LatLngBounds($scope.defaultBounds.getNorthEast(), $scope.defaultBounds.getSouthWest());

                  $scope.marker = {
                      click: function (marker, eventname, instance) {
                          window.alert(instance.title);
                      }
                  };

                  $scope.click = function (marker) {
                              window.alert("Marker: lat: " + marker.latitude + ", lon: " + marker.longitude + " clicked!!");
                          }

                  var genRandomMarkers = function (numberOfMarkers, scope) {
                      var markers = [];
                      for (var i = 0; i < numberOfMarkers; i++) {
                          markers.push(createRandomMarker(i, scope.map.bounds));
                      }
                      $scope.map.randomMarkers = markers;
                  };

                  var createRandomMarker = function (i, bounds, idKey) {
                      var lat_min = bounds.southwest.latitude,
                        lat_range = bounds.northeast.latitude - lat_min,
                        lng_min = bounds.southwest.longitude,
                        lng_range = bounds.northeast.longitude - lng_min;

                      if (!idKey)
                          idKey = "id";

                      var latitude = lat_min + (Math.random() * lat_range);
                      var longitude = lng_min + (Math.random() * lng_range);
                      var ret = {
                          latitude: latitude,
                          longitude: longitude,
                          title: 'm' + i,
                          icon: '/client/img/poalim-icon.png'
                      };
                      ret[idKey] = i;
                      return ret;
                  };

                  $scope.genRandomMarkers = function (numberOfMarkers) {
                      genRandomMarkers(numberOfMarkers, $scope);
                  };

              });

          }])

.controller('controlCtrl', function ($scope) {
    $scope.business = {
        name: 'המכללה לישראל - אופק חינוך בע"מ',
        owner: 'ישראל ישראלי',
        number: '51-123456-3',
        phone: '03-9123456',
        bank: 'הפועלים',
        period: '16,000,000 ש"ח',
    };
});