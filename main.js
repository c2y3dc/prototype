$(window).scroll(function() {
    if ($(this).scrollTop() > 0.5) {
        $('.navbar').addClass("sticky");
    } else {
        $('.navbar').removeClass("sticky");
    }

    if ($(window).width() < 769) {
        $('.navbar-default').removeClass("sticky").removeClass("navbar-fixed-top").addClass("navbar-static-top");
    }

    if ($(window).width() > 768) {
        $('.navbar-default').addClass('navbar-fixed-top');
    }
});
