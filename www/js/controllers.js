angular.module('todo', [])

  .controller('TasksCtrl', function($scope, $rootScope) {

    $rootScope.tasks = [
      {title: 'Préparer le tenkogne Ionic', done: true},
      {title: 'Aller à la foire', done: true},
      {title: 'Rencontrer un client', done: false}
    ];

  });
