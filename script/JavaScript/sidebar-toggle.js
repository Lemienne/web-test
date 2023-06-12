$(document).ready(function() {
    $('.logo-empty-svg').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').fadeIn();
    });

    $('.overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').fadeOut();
    });
})
