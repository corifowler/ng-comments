let HomeController = function(CommentService) {
  
  let vm = this;

  CommentService.getComments().then( (res) => {
    vm.comments = res.data.results;
    console.log(vm.comments);
    return vm.comments;
  });



};

HomeController.$inject = ['CommentService'];

export default HomeController;