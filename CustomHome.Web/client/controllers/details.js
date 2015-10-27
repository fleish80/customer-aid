angular.module("customAidApp").controller("detailsCtrl", ['$scope', '$stateParams',
  function ($scope, $stateParams) {
      $scope.businessNumber = $stateParams.businessNumber;
  }]);