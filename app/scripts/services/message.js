(function() {
  function Message($firebaseArray, $cookies) {
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
    
      return {
        getByRoomId: function(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));  
      },
      send: function(newChatMessage, roomId) {
          messages.$add({
              content: newChatMessage,
              username: $cookies.get('blocChatCurrentUser'),
              roomId: roomId,
              sentAt: Date.now()
          })      
    
      }
    };
  }
     
    angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', '$cookies', Message]);
    
})();