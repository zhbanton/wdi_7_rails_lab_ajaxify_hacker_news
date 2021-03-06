$(document).ready(function() {
  $('#new_comment').submit(createComment);
});

var createComment = function(event) {
  $.ajax({
    url: 'http://localhost:3000' + $(this).attr('action'),
    type: 'POST',
    data: {comment: {body: $(this).children('textarea').val()}},
    dataType: 'json'
  })
  .done(getComments);
  event.preventDefault();
};

var getComments = function(comment) {
  $.ajax({
    url: 'http://localhost:3000/articles/' + comment.comment.article_id + '/comments',
    dataType: 'json'
  })
  .done(function(data) {
    $('#comments').html(HandlebarsTemplates.comments(data));
  });
};
