(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open ({
          ariaLabelledBy: 'modal-title',
          templateUrl: 'templates/setusermodal.html',
          controller: 'SetUsernameCtrl',
          controllerAs: '$ctrl'  
        })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();