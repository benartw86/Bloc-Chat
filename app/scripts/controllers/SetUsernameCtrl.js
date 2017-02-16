(function() {
    function SetUsernameCtrl($cookies, $uibModalInstance) { //need to inject cookie service?
        this.setUsername = function(newUser) {  //function to add user to cookie
            $cookies.put('blocChatCurrentUser', newUser);  //replace current key with new one
            if ($cookies.get('blocChatCurrentUser')) {
                alert('Welcome!  Now click done! ' + newUser);   
                } else {
                alert('Enter a username!');
                }   
            }
        
        this.ok = function() {
          if ($cookies.get('blocChatCurrentUser')) {  //if there is a current user, allow dismissal of modal
              $uibModalInstance.dismiss('Done');
        }    
      }
    }
        

angular
  .module('blocChat')
  .controller('SetUsernameCtrl', ['$cookies' , '$uibModalInstance', SetUsernameCtrl]);
})();