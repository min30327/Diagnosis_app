/**
*   Angular app.js
*   Write the controllers and the filters.
    Module name is [App].
    @Example
    App.controller('[Controller name here]',['$scope','$filter',function($scope,$filter){
        //$scope or $filter chain method here.
    }]);
    @author 2014 Mineo Okuda.
**/
 	App = angular.module('App',['ngAnimate']);
    App.controller('Diagnosis',['$scope','$filter',function($scope,$filter){
        $scope.stage  = [];
        $scope.bgColor = getRandomNum();

        $scope.init = function(){
            $scope.stage[0] = true;
            $scope.stage[1] = true;
            $scope.bgColor = getRandomNum();
        }
        $scope.next_stage = function($num){
            $scope.stage[$num] = true;
            $scope.bgColor = getRandomNum();
        }
        

        function getRandomNum(){
            return Math.floor((Math.random()*6)+1);
        };
    }]);
 	
