let AddController = function($state, $scope, CommentService) {
 
  let vm = this;

  vm.addComment = addComment;

  function addComment (commentObj) {
    CommentService.addComment(commentObj).then( (res) => {
      console.log(res);
      $state.go('root.home');
    });
  }

  // validate form fields

  let validateName = (name) => {
    if (name.length <= 0) {
      $scope.msgN = 'YOU HAVE TO FILL THIS OUT';
    } else {
      $scope.msgN = 'Looks Good!';
    }
  };

  let validateEmail = (email) => {
    let emailSymbol = email.indexOf('@');
    if (emailSymbol <= 0) {
      $scope.msgE = 'YOU MUST INCLUDE @';
    } else {
      $scope.msgE = 'Looks Good!';
    }
  };

  let validateWebsite = (website) => {
    let webVal = website.indexOf('http://');
    let webVal2 = website.indexOf('https://');
    if ((webVal < 0) && (webVal2 < 0)) {
      $scope.msgW = 'need http:// or https://';
    } else {
      $scope.msgW = 'Looks Good!';
    }
  };

  let validateMessage = (message) => {
    if (message.length <= 0) {
      $scope.msgM = 'YOU HAVE TO FILL THIS OUT';
    } else {
      $scope.msgM = 'Looks Good!';
    }
  };
  
  $scope.$watch('comment.name', function(name) {
    validateName(name);
  });

  $scope.$watch('comment.email', function(email) {
    validateEmail(email);
  });

  $scope.$watch('comment.website', function(website) {
    validateWebsite(website);
  });

  $scope.$watch('comment.message', function(message) {
    validateMessage(message);
  });

};

AddController.$inject = ['$state', '$scope', 'CommentService'];

export default AddController;