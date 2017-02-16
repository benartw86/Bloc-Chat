(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        var modalInstance = $uibModal.open ({
          ariaLabelledBy: 'modal-title',
          templateUrl: 'templates/setusermodal.html',
          controller: 'SetUsernameCtrl',
          controllerAs: '$ctrl',  
          backdrop: 'static',
          keyboard: false    
        })   
      }
    }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();


        /* modalInstance.result.then(function(username) {
        this.username = username;
        $cookies.put('blocChatCurrentUser', this.username);
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);
      }); */