'use strict';

angular.module('myApp.videoSystem', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/videoSystem', {
            templateUrl: 'app/videoSystem/videoSystem.html',
            controller: 'videoSystem'
        });
    }])

    .controller('videoSystem', ['$scope', 'dataService', function ($scope, dataService) {

        $scope.videos = dataService.getAllVideos();
    }]);

