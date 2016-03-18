var $input = $('#colour-input');
var $ball = $(".ball");

$('form').on('submit', function(e) {
  var $div = $('<div>');
  e.preventDefault();
  $div.html($input.val());
  $ball.append($div);
});
