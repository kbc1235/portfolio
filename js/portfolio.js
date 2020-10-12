$(function(){
    $('header').animate({top:"0"},1000);

    $(window).on('scroll', function(){
        var windowScroll = $(this).scrollTop();

        if (windowScroll > 30){
            $('header').css({'background-color' : 'rgba(0, 0, 0, 0.6)'});
        } else {
            $('header').css({'background-color' : 'transparent'}); 
        }
    });
});