$(window).scroll(function() {
if ($(this).scrollTop() > 0.5){  
    $('.navbar').addClass("sticky");
  }
  else{
    $('.navbar').removeClass("sticky");
  }
});