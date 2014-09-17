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
 	App = angular.module('App',[]);
    App.controller('Diagnosis',['$scope','$filter',function($scope,$filter){
        $scope.start = false;
        $scope.init = function(){
            $scope.start = true;
        }
    }]);
 	
