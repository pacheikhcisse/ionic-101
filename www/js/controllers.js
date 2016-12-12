angular.module('todo', [])

  .controller('TasksCtrl', function($scope, $rootScope) {

    $rootScope.tasks = [
      {title: 'Préparer le tenkogne Ionic', done: true},
      {title: 'Aller à la foire', done: true},
      {title: 'Rencontrer un client', done: false}
    ];

    $scope.addTask = function() {
      if (this.task.title) {
        var task = {
          title: this.task.title,
          done: false
        };
        $rootScope.tasks.push(task);
      }
      this.task.title = '';
    };

    $scope.deleteTask = function () {
      $rootScope.tasks.splice($rootScope.tasks.indexOf(this.task), 1);
    }

  });
