(function() {
    function HomeCtrl(Room, Message, $cookies, $uibModal) {  //inject the room service in order to assign the array of objects retrieved by "all" method
        this.rooms = Room.all; 
        this.room = null;
        this.messages = null;
        this.newMessage = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');

        
    this.open = function() {
    var modalInstance = $uibModal.open({  //uib modal creates a object on to which you can add functionality.  Imagine the uib modal as the container that opens up when you click the modal button
        ariaLabelledBy: 'modal-header',
        templateUrl: 'templates/modal.html',
        controller: 'CreateRoomCtrl',
        controllerAs: '$ctrl'
    });
     
  }; 
     
    this.storeRoomName = function(room) {    //store a room from this.rooms in as scope value
        this.room = room;  
        this.messages = Message.getByRoomId(room.$id);
    }
    
    this.addMessage = function(chatMessage) {
        Message.send(chatMessage, this.room.$id);  //send message from home view to service to firebase array
        this.newMessage = null; //make newMessage empty again, ready for new submit
    }
        
  }
    
    

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);  //do we need ui.boostrap here
})();

