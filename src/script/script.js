$(document).ready(function() {
    $('#tutorials, #projects, #experience').hide();

    $('.menu__name').animate({
        'padding-right': '50px'
    }, 800);
    $('.menu__last-name').animate({
        'padding-left': '50px'
    }, 800);
    $('.menu__title').animate({
        opacity: '1'
    }, {
        duration: 1000,
        queue: false
    }); // queue es para que inicie inmediatamente y no espera que la animacin anterior termine

    $('#pagTitle').animate({
        'padding': '+=5px'
    }, 800);

    loadPages();

    var todasP = $('p');
    console.log (todasP);
});

function loadPages() {
    $('#aboutBtn, #learnBtn, #proBtn, #expBtn').bind('click', function() {
        var secciones = $('#tutorials, #projects, #experience, #about');
        if ($(this).attr('id') === 'learnBtn') {
            secciones.hide();
            $('#tutorials').show();
        } else if ($(this).attr('id') === 'proBtn') {
            secciones.hide();
            $('#projects').show();
        } else if ($(this).attr('id') === 'aboutBtn') {
            secciones.hide();
            $('#about').show();
        } else if ($(this).attr('id') === 'expBtn') {
            secciones.hide();
            $('#experience').show();
        }
    });
}
