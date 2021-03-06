'use strict';
//var server="http://123.56.227.177:2504"
/**
 * @ngdoc overview
 * @name dengluApp
 * @description
 * # dengluApp
 *
 * Main module of the application.
 */
angular
  .module('dengluApp', ['ngCookies','ui.router']).constant('servers','http://www.somenote.cn:1510').config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
		$stateProvider.state("dengl",{
			url:"/dengl",
			templateUrl:"views/denglu.html",
			controller:"cen"
		}).state("zc",{
			url:"/zc",
			templateUrl:"views/zhuce.html",
			controller:"can"
		}).state("bq",{
			url:"/bq",
			templateUrl:"views/biaoqian.html",
			controller:"cbq"
		}).state("tj",{
			url:"/tj",
			templateUrl:"views/tj.html",
			controller:"ctj"
		}).state("xg",{
			url:"/ul?id&title&content",
			templateUrl:"views/xg.html",
			controller:"xg"
		})
		$urlRouterProvider.when("","/dengl")
	}])
