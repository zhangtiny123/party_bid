/**
 * Created by tiny on 14-7-15.
 */
'use strict'
angular.module('partyBidApp')
    .controller('createActivityCtrl',function($scope,$location){
        var activities = new Array();
        $scope.add_new_activity = function(){
            console.log('m')
            activities.push($scope.activityName);
            localStorage['activities'] = JSON.stringify(activities);
            $location.path('/activity_sign_up')
        }
    });