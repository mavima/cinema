$('.show-img').on('click', (event) => {
    $(event.currentTarget).toggleClass('opacity');
});

$('#info-btn').on('click', () => {
    $('#description').removeClass('invisible');
    $('#info-btn').hide();
});


$('.index-img').on('mouseenter', (e) => {
    $(e.currentTarget).animate({
        opacity: '70%'
    }, 300)
}).on('mouseleave', (e) => {
    $(e.currentTarget).animate({
        opacity: '100%'
    }, 1000)
}).on('click', (e) => {
    $(e.currentTarget).animate({
        bottom: '250px'
    }, "slow");
    $(e.currentTarget).animate({
        top: '20px',
        opacity: '100%'
    });
});

$('.index-title').on('click', (e) => {
    $(e.currentTarget).toggleClass('large');
});




$('.contact-link').on('click', () => {
    if ($('.contact-slide').hasClass('invisible')) {
        $('.contact-slide').removeClass('invisible');
    }
    else {
        $('.contact-slide').addClass('invisible');
    }
});