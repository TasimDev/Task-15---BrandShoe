
$(document).ready(function () {
    // Select elements
    var menu = $('.menu');
    var close = $('.close');
    var nav = $('nav');
    var link = $('.link')
    // Add click event for opening navigation
    menu.click(function () {
        nav.addClass('open-nav');
    });

    // Add click event for closing navigation
    close.click(function () {
        nav.removeClass('open-nav');
    });

    link.click(function () {
        nav.removeClass('open-nav');
    })
    //Smooth scrolling

    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000); // Adjust the duration as needed
        }
    });
});
