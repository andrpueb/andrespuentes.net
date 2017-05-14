$(document).ready(function() {
    $('#tutorials, #projects, #experience').hide();


    $('.head__name').animate({
        'padding-left': '0px'
    }, 800);

    $('.head__last-name').animate({
        'padding-left': '50px'
    }, 800);


    $('.head__title').animate({
        opacity: '1'
    }, {
        duration: 1000,
        queue: false
    }); // queue es para que inicie inmediatamente y no espera que la animacin anterior termine

    $('#pagTitle').animate({
        'padding': '+=5px'
    }, 800);

});
