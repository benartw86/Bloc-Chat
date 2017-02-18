(function() {
  function Message($firebaseArray, $cookies) {
      var ref = firebase.database().ref().child("messages");
      var messageRoomRef = firebase.database().ref().child("messages").orderByChild('roomId');
      var messages = $firebaseArray(ref);
    
      return {
        getByRoomId: function(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));  
      },
      send: function(newChatMessage) {
          messages.$add({
              content: newChatMessage,
              username: $cookies.get('blocChatCurrentUser'),
          })      
    
      }
    };
  }
     
    angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', '$cookies', Message]);
    
})();