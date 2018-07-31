$(document).ready(function() {
  $('.js-scrollTo').on('click', function() {
  var page = $(this).attr('href');
  var speed = 1800;
  $('html, body').animate( { scrollBottom: $(page).offset().bottom}, speed );Go
  return true;
 });
});
$(function (){
    function timer(n) {
        $(".progress-bar").css("width", n + "%");
        if(){
              setTimeout(function() {
                  timer(n + 10);
            }, 200);
        }
    }

    timer(0);
});
