'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('SubmitCtrl', function ($scope, $firebaseObject, $firebaseArray) {
    
  	var rootRef = new Firebase('https://torrid-inferno-8842.firebaseio.com/');
	var artRef = rootRef.child('art');

  	$scope.artItems = $firebaseArray(artRef);

  	$scope.item = {
  		img: 'http://',
  		url: 'http://'
  	};

  	$scope.addItem = function(){

  		$scope.artItems.$add($scope.item);

  		$scope.item = {
  			img: 'http://',
  			url: 'http://'
  		};

  	};



  });