var myapp = angular.module("livescore", []);

myapp.controller("tableCtrl", function ($scope) {
    $scope.navbar = ['Football', 'Hockey', 'Basketball', 'Tennis', 'Cricket', 'News', 'Streaming', 'LiveScore Bet', 'Settings'];
    $scope.aside = ['Home', 'Live', 'Favourites', 'England', 'Spain', 'Italy', 'Germany', 'France', 'Netherlands'];
    $scope.date = ['MAY 29', 'MAY 30', 'MAY 31', 'TODAY', 'JUN 2', 'JUN 3', 'JUN 4'];
    $scope.game = [
        ['09:00', 'Croatia', '? - ?', 'Armenia'],
        ['09:00', 'Kosovo', '? - ?', 'San Marino'],
        ['09:00', 'Lithuania', '? - ?', 'Estonia'],
        ['09:00', 'North Macedonia', '? - ?', 'Slovenia'],
        ['09:00', 'Slovenia', '? - ?', 'Bulgaria'],
    ];
});