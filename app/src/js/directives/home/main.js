'use strict';

app.directive('homePage', [ function() {
    return {
        restrict: 'A',
        
        templateUrl : 'src/js/directives/home/templates/index.html',

        link: function($scope, $el, $attr) {
            
         }
       }
}]);


