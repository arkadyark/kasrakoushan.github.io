var main = function() {
    $('.model a').click(function() {
        var val1 = $('#input1').val().length;
        var val2 = $('#input2').val().length;
        var val3 = $('#input3').val().length;
        var val4 = $('#input4').val().length;
        if (val1===0 || val2===0 || 
            val3===0 || val4===0) {
            $('.warning').show();
        }
        else {
            if ($('.filler').css('display')==='none') {
                var wait = 2600;
            }
            else {
                var wait = 3000;
            }
            $('.warning').hide();
            $('.result-table').show();
            $('.filler').slideUp(400);
            $('.result').slideUp(400);
            $('.pressure-profile').slideUp(400);
            $('.density-profile').slideUp(400);
            $('.loading').delay(400).slideDown(400);
            $('.loading').delay(1800).slideUp(400);
            $('.result').delay(wait).slideDown(400);
            $(this).text('Try again');
        }
    });
    $('.pressure a').click(function() {
        $('.pressure-profile').slideDown(300);
        $('.density-profile').slideUp(300);
    });
    $('.density a').click(function() {
        $('.density-profile').slideDown(300);
        $('.pressure-profile').slideUp(300);
    });
};

$(document).ready(main);