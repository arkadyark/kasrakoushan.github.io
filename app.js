var main = function() {
    $('.model a').click(function() {
        var value = $('textarea').val().length;
        if (value === 0) {
            $('.warning').show();
        }
        else {
            $('.warning').hide();
            $('.filler').animate({width: '0px'}, 400);
            $('.loading').fadeIn(1000);
            $('.loading').delay(3000).fadeOut(10);
            $('.result').delay(3980).animate({width: '600px'}, 400);
            $('.result-table').delay(4100).show(0);
            $(this).text('Try again');
        }
    });
    $('.pressure a').click(function() {
        $('.pressure-profile').show();
        $('.density-profile').hide();
    });
    $('.density a').click(function() {
        $('.density-profile').show();
        $('.pressure-profile').hide();
    });
};

$(document).ready(main);