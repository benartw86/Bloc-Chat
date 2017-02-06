(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
     var addChatRoom = function(newChatRoomName) {
        rooms.$add({
            name: newChatRoomName
        });
    }; 
      
    return {
        all: rooms,
        addChatRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();