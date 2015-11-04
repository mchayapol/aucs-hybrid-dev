angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }, {
    id: 5,
    name: 'Chayapol Moemeng',
    lastText: 'Good Job!',
    face: 'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpt1/t31.0-8/11802719_10207520363785021_4444514585625048207_o.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Contacts', function() {
  var self = this;
  // Some fake testing data
  var contacts = [{
    id: 0,
    name: 'Ben Sparrow',
    phone: '081 111 1111',
    email: 'ben@gmail.com',
    avatar: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    phone: '082 222 2222',
    email: 'max@gmail.com',
    avatar: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    phone: '083 333 3333',
    email: 'adam@gmail.com',
    avatar: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    phone: '084 444 4444',
    email: 'perry@gmail.com',
    avatar: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    phone: '085 555 5555',
    email: 'mike@gmail.com',
    avatar: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }, {
    id: 5,
    name: 'Chayapol Moemeng',
    phone: '086 666 6666',
    email: 'chayapol@gmail.com',
    avatar: 'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpt1/t31.0-8/11802719_10207520363785021_4444514585625048207_o.jpg'
  }];

  // add contact
  self.add = function (contactObj) {
       contactObj = {
         id     : contacts.length,
         name   : contactObj.name,
         phone  : contactObj.phone,
         email  : contactObj.email,
         avatar : contactObj.avatar
       }
       console.log("length "+contacts.length);
       contacts[contacts.length] = contactObj;
      //  contacts[contacts.length] = {contact.length,contact.name,contact.phone,contact.email,contact.avatar};
    };

  // $self.update = function(contactId, contactObj) {
  //   for (var i = 0; i < contacts.length; i++) {
  //     if (contacts[i].id === parseInt(contactId)) {
  //       contacts[i] = contactObj;
  //       return contacts[i];
  //     }
  //   }
  //   return null;
  //   };

  self.all = function() {
      return contacts;
    };

  self.get = function(contactId) {
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id === parseInt(contactId)) {
          return contacts[i];
        }
      }
      return null;
    };

    return self;

});
