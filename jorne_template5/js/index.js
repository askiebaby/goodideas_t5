// JavaScript Document

$(document).ready(function(){
  // banner 全螢幕
	$('.banner').css('height',$(window).height()-50);

	// fancybox
	$(".fancybox").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'fade'
	});

	// what who how 文字slide
  $("#owl-do,#owl-how,#owl-who,#owl-believe").owlCarousel({
  singleItem:true,
  navigation : false,
  slideSpeed : 800,
  paginationSpeed : 800,
  autoPlay : false,
  stopOnHover : true
  });

	// top
	$('.top').click(function(){
    $('html,body').animate({scrollTop:0}, 1000);
  });

});

$(window).resize(function(){
  // banner 全螢幕
	$('.banner').css('height',$(window).height()-50);

});
