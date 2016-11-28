(function() {
    'use strict';
    angular.module('price_app').
    factory('app_service', function($http, $q) {

        var app_service = {};
        app_service.city_api = function(data) {
            //console.log(data);
            var request = $http.get("http://dev.api.truce.co.in/api/v1/logistics/city/pricing/");
            return request.then(handleSuccess, handleFailure);
        }

        function handleSuccess(response) {
            return (response.data);
        };

        function handleFailure(response) {
            return $q.reject(response.data);
        }


        return app_service;
    });
})()
