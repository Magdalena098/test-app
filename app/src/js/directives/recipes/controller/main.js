'use strict';


app.controller('detailsCtrl', ['$scope', '$rootScope', 'AjaxFactory', '$filter', '$stateParams', function($scope, $rootScope, AjaxFactory, $filter, $stateParams) {

    var detailsData = AjaxFactory('src/default/details.json');

    detailsData.price(function(value) {
        //getting the json data
        var allValues = value.detailsData.details;

        $scope.getRecipe = function(id) {
            for (var i = 0; i < allValues.length; i++) {
                if (allValues[i].id == id)
                    return allValues[i];
            }
            return null;
        }
        $scope.item = $scope.getRecipe($stateParams.id);

        $scope.navigateBack = function() {
            window.history.back();
        };

    });

}]);