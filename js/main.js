var $html = $('html');
var $input = $('#colour-input');
var $ball = $('.ball');
var $form = $('form');

$('form').on('change', function () {
  $ball.css('background-color', $input.val());
});
