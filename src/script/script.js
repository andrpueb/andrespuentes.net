$(document).ready(function() {
  $('.head__name').animate({
    'padding-left': '0px'
  }, 1000);

  $('.head__last-name').animate({
    'padding-left': '50px'
  }, 1000);


  $('.head__title').animate({
    opacity: '1'
  }, {
    duration: 1000,
    queue: false
  }); // queue es para que inicie inmediatamente y no espera que la animacin anterior termine

  $('#pagTitle').animate({
    'padding': '+=5px'
  }, 800);


  var $projectOne = $('.projectOne');

  $projectOne.waypoint(function(direction) {
    if (direction == "down") {
      $projectOne.addClass('animate-thumb');
    } else {
      $projectOne.removeClass('animate-thumb');
    }

  }, {
    offset: '80%'
  })


  var $projectTwo = $('.projectTwo');

  $projectTwo.waypoint(function(direction) {
    if (direction == "down") {
      $projectTwo.addClass('animate-thumb');
    } else {
      $projectTwo.removeClass('animate-thumb');
    }

  }, {
    offset: '80%'
  })


  var $contactForm = $('#contact-form');
  $contactForm.submit(function(e) {
  	e.preventDefault();
  	$.ajax({
  		url: '//formspree.io/me@andrespuentes.net',
  		method: 'POST',
  		data: $(this).serialize(),
  		dataType: 'json',
  		beforeSend: function() {
  			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
  		},
  		success: function(data) {
  			$contactForm.find('.alert--loading').hide();
  			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
  		},
  		error: function(err) {
  			$contactForm.find('.alert--loading').hide();
  			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
  		}
  	});
  });


  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});
