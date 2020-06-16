$(function() {
    $('ul').children().addClass('hidden').each(function (index) {
        $(this).delay(80 * index).animate({ opacity: 1.0 }, 800)
    });

    $('main').addClass('hidden').animate({ opacity: 1.0 }, 1400);
    //$('main').slideToggle().slideToggle(5000);
})