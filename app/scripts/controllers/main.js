'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($scope, $firebaseObject, $firebaseArray) {
    
    // Getting the "art" child node of our firebase
  	var rootRef = new Firebase('https://torrid-inferno-8842.firebaseio.com/');
	var artRef = rootRef.child('art').limitToLast(25);

	// an array of our art items in our firebase
  	$scope.artItems = $firebaseArray(artRef);

  	// get a random number
  	$scope.getRandomSpan = function(){
	  return Math.floor((Math.random()*4)+1);
	};

	$scope.gridClasses = [
	];




  });
