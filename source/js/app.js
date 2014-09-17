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
    /**
     * [description]
     * @return {[type]} [description]
     */
 	App.filter('nl2br', function() {
	  return function(input) {
	    return input.replace(/\n/g, '<br>');
	  };
	});
    /**
     * [description]
     * @return {[type]} [description]
     */
	App.filter('parseUrl', function() {
	    var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/gi;
	    return function(text, target, style) {
	        style = style || null;
	        angular.forEach(text.match(urlPattern), function(url) {
	            if (style) {
	                text = text.replace(url, '<a target="' + target + '" href='+ url + ' style="' + style + '">' + url + '</a>');
	            } else {
	                text = text.replace(url, '<a target="' + target + '" href='+ url + '>' + url + '</a>');
	            }
	        });
	        return text;
	    };
	});
 	
