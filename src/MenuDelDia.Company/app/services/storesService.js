(function () {
    'use strict';

    angular
        .module('menudeldia')
        .factory('storesService', storesService);

    storesService.$inject = ['$q', '$http'];

    function storesService($q, $http) {
        var service = {
            addStore:addStore,
            updateStore:updateStore,
            stores:stores
        };

        return service;

        function stores() {
            var deferred = $q.defer();

            //call webapi service
            $http.get('http://mddservice.azurewebsites.net/api/site/stores/')
                .success(function (data, status, headers, config) { deferred.resolve(data); })
                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });

            return deferred.promise;
        }

        function addStore(store) {
            var deferred = $q.defer();

            //call webapi service
            $http.post('http://mddservice.azurewebsites.net/api/site/store', store)
                .success(function (data, status, headers, config) { deferred.resolve(data); })
                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });

            return deferred.promise;
        }

        function updateStore(store) {
            var deferred = $q.defer();

            //call webapi service
            $http.post('http://mddservice.azurewebsites.net/api/site/updatestore', store)
                .success(function (data, status, headers, config) { deferred.resolve(data); })
                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });

            return deferred.promise;
        }
    }
})();