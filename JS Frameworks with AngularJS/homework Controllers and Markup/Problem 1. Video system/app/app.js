'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.addVideo',
    'myApp.version',
    'myApp.videoSystem'
]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }])
    .factory('dataService', function dataService() {
        
        var videos = [{
            title: 'Course introduction',
            pictureUrl: 'https://softuni.bg/Files/Publications/2014/04/SoftUni-Wallpaper-news_213645751.png',
            length: '3:32',
            category: 'IT',
            subscribers: 3,
            date: new Date(2014, 12, 15),
            haveSubtitles: false,
            comments: [
                {
                    username: 'Pesho Peshev',
                    content: 'Congratulations Nakov',
                    date: new Date(2014, 12, 15, 12, 30, 0),
                    likes: 3,
                    websiteUrl: 'http://pesho.com/'
                },
                {
                    username: 'Jo Joev',
                    content: 'evala Nakov',
                    date: new Date(2016, 12, 15, 12, 30, 0),
                    likes: 3,
                    websiteUrl: 'http://jonas.com/'
                }
            ]
        },
            {
                title: 'Course introductionn',
                pictureUrl: 'https://softuni.bg/Files/Publications/2014/04/SoftUni-Wallpaper-news_213645751.png',
                length: '3:32',
                category: 'IT',
                subscribers: 3,
                date: new Date(2014, 12, 15),
                haveSubtitles: false,
                comments: [
                    {
                        username: 'Pesho Peshev',
                        content: 'Congratulations Nakov',
                        date: new Date(2014, 12, 15, 12, 30, 0),
                        likes: 3,
                        websiteUrl: 'http://pesho.com/'
                    }
                ]
            }];

        function getAllVideos() {
            return videos;
        }

        function addVideo(video) {
            var newVideo = {
                title: video.title,
                pictureUrl: video.pictureUrl,
                length: video.length || 0,
                category: video.category,
                subscribers: video.subscribers,
                date: new Date(),
                haveSubtitles: video.haveSubtitles,
                comments: []
            };

            videos.push(newVideo);
        }

        return {
            getAllVideos: getAllVideos,
            addVideo: addVideo,
        }
    });

