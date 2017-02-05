(function() {
    function CreateRoomCtrl(Room, $uibModalInstance) {
        
        this.addChat = function(roomName) {  
           Room.addChatRoom(roomName);
         }  
        
        this.ok = function() {
              $uibModalInstance.close('All Done');
              alert("No more chats to add?");
             //add logic to make ok button functional
        }
        
        this.cancel = function() {
              $uibModalInstance.dismiss('cancel');  //why cancel?
              alert("Are you sure you want to cancel?");
        }   
    }
    
    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['Room', '$uibModalInstance', CreateRoomCtrl])
})();