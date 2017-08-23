var mod = angular.module("clock", []);
mod.controller("ClockTime", timeCtrl);
function timeCtrl($scope) {   
    var currentTime = new Date();
    var timeT = currentTime.toTimeString();
    $scope.userName = "";
    $scope.time = timeT;
    $scope.updateTime = function(){
        var currentTime = new Date();
        var timeT = currentTime.toTimeString();
        $scope.time = timeT;
    }
}