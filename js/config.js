let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/comments.tpl.html'
    })
    .state('root.addcomment', {
      url: '/addcomment',
      controller: 'AddController as vm',
      templateUrl: 'templates/addcomment.tpl.html'
    });
  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;