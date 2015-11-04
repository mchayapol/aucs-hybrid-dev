angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ContactCtrl', function($scope, Contacts){
  $scope.contacts = Contacts.all();
  $scope.remove = function(contact) {
    Contacts.remove(contact);
  }
})

.controller('ContactDetailCtrl', function($scope, $location, $stateParams, Contacts) {
  $scope.contact = Contacts.get($stateParams.contactId);

  $scope.edit = function () {
    $scope.contact = Contacts.get($stateParams.contactId);
    console.log($scope.contact);
    $location.path("/tab/contact-update");
  }
})

// .controller('ChatsCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});
//
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })
//
// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
//
//
// })

.controller('ContactAddCtrl', function ($scope, $location, Contacts) {
   $scope.contact = {
       name: '',
       phone: '',
       email: '',
       avatar: ''
   }

   $scope.goBack = function () {
       $location.path("/tab/contacts");
   }

   $scope.add = function () {
     if($scope.contact.name == null ||
        $scope.contact.phone == null ||
        $scope.contact.email == null) {
       $location.path('/tab/contact-add');
     } else if($scope.contact.avatar == null) {
       $scope.contact = {
         id: Contacts.length,
         name: $scope.contact.name,
         phone: $scope.contact.phone,
         email: $scope.contact.email,
         avatar: 'https://d1ld1je540hac5.cloudfront.net/assets/img/default_avatar.png'
       }
     }else {
       $scope.contact = {
         id: Contacts.length,
         name: $scope.contact.name,
         phone: $scope.contact.phone,
         email: $scope.contact.email,
         avatar: $scope.contact.avatar
       }
     }
       console.log($scope.contact);
       Contacts.add($scope.contact);
       $scope.goBack();
   }
})

.controller('ContactUpdateCtrl', function ($scope, $stateParams, Contacts) {
    $scope.contact = Contacts.get($stateParams.contactId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

});
