(function () {
    'use strict';

    angular
        .module('menudeldia')
        .factory('configService', configService);

    configService.$inject = ['$q', '$http'];

    function configService($q, $http) {
        var service = {
            getTags: getTags
        };

        return service;

        function getTags() {
            var deferred = $q.defer();

            //call webapi service
            $http.get('http://localhost:45291/api/site/tags')
                .error(function(data, status, headers, config) { deferred.reject({ data: data, status: status }); })
                .success(function(data, status, headers, config) { deferred.resolve(data); });

            return deferred.promise;
        }
    }
})();

//(function () {
//    'use strict';

//    angular
//        .module('menudeldia')
//        .factory('configService', configService);

//    configService.$inject = ['$q', '$http'];

//    function configService($q, $http) {
//        var service = {
//            getTags: getTags
//        };

//        return service;

//        function getTags() {
//            var deferred = $q.defer();

//            //call webapi service
//            $http.get('http://mddservice.azurewebsites.net/api/site/tags')
//                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); })
//                .success(function (data, status, headers, config) { deferred.resolve(data); });

//            return deferred.promise;
//        }
//    }
//})();