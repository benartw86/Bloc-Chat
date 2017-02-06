(function() {
    function HomeCtrl(Room, $uibModal) {  //inject the room service in order to assign the array of objects retrieved by "all" method
        this.rooms = Room.all; 
        
        this.open = function() {
        var modalInstance = $uibModal.open({  //uib modal creates a object on to which you can add functionality.  Imagine the uib modal as the container that opens up when you click the modal button
            ariaLabelledBy: 'modal-header',
            templateUrl: 'templates/modal.html',
            controller: 'CreateRoomCtrl',
            controllerAs: '$ctrl'
        });
     
    }; 
        
  }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);  //do we need ui.boostrap here
})();

