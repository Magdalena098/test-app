function Ajax($http, url) {
    /** The public method for getting the project id **/
    this.price = function(callback) {
        $http.get(url)
            .success(function(value) {
                callback(value);
        });
    };
};

app.factory('AjaxFactory', ['$http',
    /** This is the factory method that Angular will execute only ONCE **/
    function AjaxFactory($http) {
        /** This is the function that will be injected into the directive, and called multiple times by the programmer **/
        return function(url) {
            /** this is the new object that will be created and used by the programmer **/
            return new Ajax($http, url);
        };
    }
]);