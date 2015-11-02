angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {
    $scope.name = "Chayapol Moemeng";
    $scope.datetime = new Date();
})


.controller('ContactsCtrl', function ($scope, $location, Contacts) {
    $scope.contacts = Contacts.all();
    $scope.remove = function (contact) {
        // remove the given contact from your data store
        Contacts.remove(contact);
    }
    $scope.navToAddPage = function () {
        $location.path("/tab/contact-add");
    }
})
.controller('ContactDetailCtrl', function ($scope, $stateParams, Contacts) {
    var contactId = $stateParams.contactId;
    $scope.contact = Contacts.get(contactId);
})

.controller('ContactAddCtrl', function ($scope, $location, Contacts) {
    
    $scope.contact = {
        name: '',
        phone: '',
        email: ''
    }

    $scope.goBack = function () {
        $location.path("/tab/contacts");
    }

    $scope.add = function () {
        Contacts.add($scope.contact);
        $scope.goBack();
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
