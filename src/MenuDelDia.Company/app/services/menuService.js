(function () {
    'use strict';

    angular
        .module('menudeldia')
        .factory('menuService', menuService);

    menuService.$inject = ['$q', '$http', 'appSettings'];

    function menuService($q, $http, appSettings) {
        var service = {
            saveMenu: saveMenu,
            menus: menus
        };

        return service;

        function menus() {
            var deferred = $q.defer();

            //call webapi service
            $http.get(appSettings.url + 'api/site/menus/')
                .success(function (data, status, headers, config) { deferred.resolve(data); })
                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });

            return deferred.promise;
        }

        function saveMenu(menu) {
            var deferred = $q.defer();

            //call webapi service
            $http.post(appSettings.url + 'api/site/menu', menu)
                .success(function (data, status, headers, config) { deferred.resolve(data); })
                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });

            return deferred.promise;
        }
    }
})();