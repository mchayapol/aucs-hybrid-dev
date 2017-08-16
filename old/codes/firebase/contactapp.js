'use strict'

var app = angular.module("contactApp", ["firebase"]);
app.controller("ContactCtrl", function ($scope, $firebaseObject, $firebaseArray) {
    var ref = new Firebase("https://sizzling-torch-4236.firebaseio.com/");

    $scope.contacts = $firebaseArray(ref);

    $scope.addContact = function () {
        $scope.contacts.$add({
            name: $scope.name,
            phone: $scope.phone,
            email: $scope.email
        });
    };
});