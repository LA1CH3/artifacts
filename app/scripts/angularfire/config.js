angular.module('firebase.config', [])
  .constant('FBURL', 'https://torrid-inferno-8842.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
