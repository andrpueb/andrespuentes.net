
window.onload = function () {


		$('#name').animate({
			'padding-right': '5px'}, 800);
		$('#lastName').animate({
			'padding-left': '5px'}, 800);
		$('#title').animate({
			opacity: '1'}, 
			{duration: 800, queue: false});

		$('#pageHeading').animate
	

	$('#tutorials, #projects, #experience').hide();

	loadPages();



}



function loadPages () {
	$('#aboutBtn, #learnBtn, #proBtn, #expBtn').bind('click', function () {
		var secciones = $('#tutorials, #projects, #experience, #about');
		if($(this).attr('id') == 'learnBtn'){
			secciones.hide();
			$('#tutorials').show();
		}else if ($(this).attr('id') == 'proBtn'){
			secciones.hide();
			$('#projects').show();
		}else if ($(this).attr('id') == 'aboutBtn'){
			secciones.hide();
			$('#about').show();
		}else if ($(this).attr('id') == 'expBtn'){
			secciones.hide();
			$('#experience').show();
		}
	}); 
}







