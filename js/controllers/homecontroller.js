let HomeController = function(CommentService) {
  
  let vm = this;

  vm.commentList = commentList;

  function commentList () {
    CommentService.getComments().then( (res) => {
      console.log(res);
    });
  }

};

HomeController.$inject = ['CommentService'];

export default HomeController;