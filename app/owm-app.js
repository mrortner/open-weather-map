angular.module('OWMApp', ['ngRoute'])
    .value('owmCities', ['New York', 'Dallas', 'Chicago'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl'
        }).when('/cities/:city', {
            templateUrl : 'city.html',
            controller : 'CityCtrl',
            resolve : {
                city: function(owmCities, $route, $location) {
                    var city = $route.current.params.city;
                    if(owmCities.indexOf(city) == -1 ) {
                        $location.path('/error');
                        return;
                    }
                    return city;
                }
            }
        }).when('/error', {
            templateUrl : 'error.html',
            controller : 'ErrorCtrl'
        });
    }])
    .controller('HomeCtrl',["$scope", function($scope) {
        //empty for now
    }])

    .controller('CityCtrl',["$scope","city", function($scope, city) {
        $scope.city = city;
    }])

    .controller('ErrorCtrl',['$scope', function($scope) {
        //empty for now
    }]);