(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open ({
          ariaLabelledBy: 'modal-title',
          templateUrl: 'templates/setusermodal.html',
          controller: 'SetUsername',
          controllerAs: '$ctrl'  
        })
      // Do something to allow users to set their username
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();