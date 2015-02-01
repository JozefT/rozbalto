$(document).ready(function() {

    // pulse
    $(function pulse(back) {
        $('#box').animate({
            opacity: (back) ? 1 : 1
        }, 20, function() {
            pulse(!back)
        });
        $('#box').animate({
            'width': (back) ? '480px' : '470px'
        }, 500);
        return false;
    });

    // scroll 
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // waypointz
    $('#infos section #1').hide();
    $('#infos section').waypoint(function() {
        $('#infos section #1').show();
        $('#infos section #1').addClass('animated bounceInRight');
    }, {
        offset: '70%',
        triggerOnce: true
    });
    $('#infos section #2').hide();
    $('#infos section').waypoint(function() {
        $('#infos section #2').show();
        $('#infos section #2').addClass('animated bounceInRight');
    }, {
        offset: '50%',
        triggerOnce: true
    });

    // slick 
    $('.multiple-items').slick({
        dots: false,
        infinite: true,
        touchMove: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
	responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
   

    // table hoverz
    $('#schedule .program section table tbody tr td article').hide();
    $('#schedule .program section table tbody tr td').hover(function() {
        $(this).children('article').stop().slideToggle(500);
        return false
    });
});
