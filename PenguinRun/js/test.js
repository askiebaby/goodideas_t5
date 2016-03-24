

$( document ).ready(function() {
  $(function(){
      $(".information-button").click(function(){
          jQuery("html,body").animate({
              scrollTop:0
          },1000);
      });
      $(window).scroll(function() {
          if ( $(this).scrollTop() > 300){
              $('.information-button').fadeIn("fast");
          } else {
              $('.information-button').stop().fadeOut("fast");
          }
      });
  });
});
