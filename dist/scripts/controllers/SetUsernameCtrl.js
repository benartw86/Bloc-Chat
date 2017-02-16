(function() {
    function SetUsernameCtrl($cookies, $uibModalInstance) { //need to inject cookie service?
        this.setUsername = function(newUser) {  //function to add user to cookie
            $cookies.put('blocChatCurrentUser', 'newUser');  //replace current key with new one
        }   
        
        this.ok = function() {
          var currentUser = $cookies.get('newUser');  
          if (currentUser) {  //if there is a current user, allow dismissal of modal
              $uibModalInstance.dismiss('cancel');
        }    
      }
    }
        

angular
  .module('blocChat')
  .controller('SetUsernameCtrl', ['$cookies' , '$uibModalInstance', SetUsernameCtrl]);
})();