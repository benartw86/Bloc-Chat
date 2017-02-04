(function() {
    function CreateRoomCtrl (Room, $uibModalInstance) {
        
        
        this.addChat = function() {  //Not sure what the correct syntax to add new chat is
            Room.addChatRoom({text: newChatRoomName});
         };  
        
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