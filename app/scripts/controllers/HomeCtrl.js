(function() {
    function HomeCtrl(Room) {  //inject the room service in order to assign the array of objects retrieved by "all" method
        this.rooms = Room.all; 
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();