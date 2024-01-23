$('.show-img').on('click', (event) => {
    $(event.currentTarget).toggleClass('opacity');
});

$('#info-btn').on('click', () => {
    $('#description').removeClass('invisible');
    $('#info-btn').hide();
});


$('.index-img').on('mouseenter', (e) => {
    $(e.currentTarget).animate({
        opacity: '80%'
    }, 300)
}).on('mouseleave', (e) => {
    $(e.currentTarget).animate({
        opacity: '100%'
    }, 1000)
}).on('click', (e) => {
    $(e.currentTarget).toggleClass('resize-image');
})

$('.index-title').on('click', (e) => {
    $(e.currentTarget).animate({
        fontSize: '4rem'
    });
});



$('.contact-link').on('click', () => {
    if ($('.contact-slide').hasClass('invisible')) {
        $('.contact-slide').removeClass('invisible');
    }
    else {
        $('.contact-slide').addClass('invisible');
    }
});