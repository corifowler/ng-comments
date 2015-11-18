let CommentService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/comment';

  this.addComment = addComment;
  this.getComments = getComments;

  let Comment = function(commentObj) {
    this.name = commentObj.name;
    this.email = commentObj.email;
    this.website = commentObj.website;
    this.message = commentObj.message;
  };

  function addComment (commentObj) {
    let c = new Comment(commentObj);
    return $http.post(url, c, PARSE.CONFIG);
  }

  function getComments () {
    return $http.get(url, PARSE.CONFIG);
  }
  
};

CommentService.$inject = ['$http', 'PARSE'];

export default CommentService;