'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope, Task) {
    $scope.taskList = [];
    $scope.taskList.push(Task.createTask());
    $scope.taskList.push(Task.createTask('Get eggs'));
    $scope.taskList.push(Task.createTask('Call Paul'));
    $scope.taskList.push(Task.createTask('Gym'));
    var t = Task.createTask('Homework');
    t.isCompleted = true;
    $scope.taskList.push(t);

    $scope.deleteTask = function (task) {
      console.debug('Delete', task);
      var index = $scope.taskList.indexOf(task);
      $scope.taskList.splice(index, 1);
    }

    $scope.addTask = function (taskTitle) {
      $scope.taskList.push(Task.createTask(taskTitle));
      $scope.taskTitle = '';
    }
  });
