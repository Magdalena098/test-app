'use strict';

app.controller('ajaxCtrl', ['$scope', '$rootScope', 'AjaxFactory', '$filter', '$stateParams', function($scope, $rootScope, AjaxFactory, $filter, $stateParams) {

    var data = AjaxFactory('src/default/data.json');

    data.price(function(value) {
        //getting the json data
        $scope.ourData = value;

    });

     $scope.data = {
        recipes: []
      };


    $scope.octopus = {
        findMatch: function(item) {
            return $scope.data.recipes.find(function(val) {
                return val.id === item.id;
            });
        },

        addRecipe: function(value) {
          // var match = this.findMatch(value);
          // if (match) {
          //       match.id += 1;
          //       return;
          //   }
            var itemToPush = angular.copy(value);
            itemToPush.id = 1;
            if (itemToPush.id === 'undefined') {
                 return;
            } else {
                $scope.data.recipes.push(itemToPush);
            }
        },

        removeRecipe: function(items) {
            var match = this.findMatch(items);
            if (match.quantity > 1) {
                match.quantity -= 1;
                return;
            }
            $scope.data.recipes.splice($scope.data.recipes.indexOf(items), 1);
        }
    }

}]);