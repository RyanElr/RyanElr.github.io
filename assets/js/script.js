$(document).ready(function() {
  $('.js-scrollTo').on('click', function() {
  var page = $(this).attr('href');
  var speed = 1800;
  $('html, body').animate( { scrollTop: $(page).offset().bottom}, speed );Go
  return false;
 });
});
$(function (){
    function timer(n) {
        $(".progress-bar").css("width", n + "%");
        if(n < 80) {
                setTimeout(function() {
                    timer(n + 10);
            }, 300);
        }
    }

    timer(0);
});
