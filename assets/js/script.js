$(document).ready(function() {
  $('.js-scrollTo').on('click', function() {
  var page = $(this).attr('href');
  var speed = 1800;
  $('html, body').animate( { scrollTop: $(page).offset().top}, speed );//Go
  return false;
});
  $('.js-scrollBottom').click(function(){
    var doc = $(this).attr('href');
    var slow = 1800;
      $('html, body').animate({scrollTop:$(doc).offset().top}, slow);
      return true;
});
});
 /*$(function (){
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
 */
