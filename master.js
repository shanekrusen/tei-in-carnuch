$(document).ready(function() {
    $('.fade').hide();
    $('.body-content').hide();
    $('.published').hide();
    $('.home').show();
    setTimeout(function() {
        $('.fade').fadeIn(1600);
    }, 1000);
    $('.enter').click(function() {
        $('.overlay').fadeOut(1600);
    });
    $('.home-link').click(function() {
        $('.about').hide();
        $('.published').hide();
        $('.contact').hide();
        $('.home').show();
    });
    $('.about-link').click(function() {
        $('.home').hide();
        $('.published').hide();
        $('.contact').hide();
        $('.about').show();
    });
    $('.published-link').click(function() {
        $('.home').hide();
        $('.contact').hide();
        $('.about').hide();
        $('.published').show();
    });
    $('.contact-link').click(function() {
        $('.home').hide();
        $('.about').hide();
        $('.published').hide();
        $('.contact').show();
    })
});