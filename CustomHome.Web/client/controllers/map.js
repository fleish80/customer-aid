angular.module("customAidApp").controller("mapCtrl", ['$scope',
  function ($scope) {
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
  }]);