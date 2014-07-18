/**
 * Created by tiny on 14-7-15.
 */
'use strict'
angular.module('partyBidApp')
    .controller('activitySignUpCtrl',function($scope,$location){
        $scope.start_sign_up = function() {

        }
        $scope.activityName='huodong mingcheng';

        $scope.back_to_activityList = function() {
            $location.path('/views/activity_list.html')
        }
    });