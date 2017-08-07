$(document).ready(function() {
  $(".head__name").animate({
    "padding-left": "0px"
  }, 1e3), $(".head__last-name").animate({
    "padding-left": "50px"
  }, 1e3), $(".head__title").animate({
    opacity: "1"
  }, {
    duration: 1e3,
    queue: !1
  }), $("#pagTitle").animate({
    padding: "+=5px"
  }, 800);


  //waypoints
  var e = $(".projectOne");
  e.waypoint(function(a) {
    "down" == a ? e.addClass("animate-thumb") : e.removeClass("animate-thumb")
  }, {
    offset: "80%"
  });
  var a = $(".projectTwo");
  a.waypoint(function(e) {
    "down" == e ? a.addClass("animate-thumb") : a.removeClass("animate-thumb")
  }, {
    offset: "80%"
  });
  var t = $(".projectThree");
  t.waypoint(function(e) {
    "down" == e ? t.addClass("animate-thumb") : t.removeClass("animate-thumb")
  }, {
    offset: "80%"
  });


  //contact form
  var n = $("#contact-form");
  n.submit(function(e) {
    e.preventDefault(), $.ajax({
      url: "//formspree.io/me@andrespuentes.net",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json",
      beforeSend: function() {
        n.append('<div class="alert alert--loading">Sending message…</div>')
      },
      success: function(e) {
        n.find(".alert--loading").hide(), n.append('<div class="alert alert--success">Message sent!</div>')
      },
      error: function(e) {
        n.find(".alert--loading").hide(), n.append('<div class="alert alert--error">Ops, there was an error.</div>')
      }
    })
  });

  //auto scroll
  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();
    var a = this.hash,
      t = $(a);
    $("html, body").stop().animate({
      scrollTop: t.offset().top
    }, 900, "swing", function() {
      window.location.hash = a
    })
  });

  //tag manager

  $('.nav_btn').on('click', function() {
    if ($(this).attr('id') == 'about_btn') {
      dataLayer.push({
        'myVariable': 'itWorks!',
        'navBtnClicked': 'about',
        'event': 'navClicked'
      });
    } else if ($(this).attr('id') == 'projects_btn') {
      dataLayer.push({
        'myVariable': 'itWorks!',
        'navBtnClicked': 'projects',
        'event': 'navClicked'
      });
    } else if ($(this).attr('id') == 'contact_btn') {
      dataLayer.push({
        'myVariable': 'itWorks!',
        'navBtnClicked': 'contact',
        'event': 'navClicked'
      });
    }
  })

  $('.goToSite').on('click', function() {
    if ($(this).parent().parent().hasClass('projectOne')) {
      dataLayer.push({
        'project': 'Ceramind.co',
        'event': 'Project Clicked'
      });
    } else if ($(this).parent().parent().hasClass('projectTwo')) {
      dataLayer.push({
        'project': 'Frogger',
        'event': 'Project Clicked'
      });
    } else if ($(this).parent().parent().hasClass('projectThree')) {
      dataLayer.push({
        'project': 'Google Maps',
        'event': 'Project Clicked'
      });
    }
  })






  dataLayer.push({
    'event': 'page has loaded'
  })


});
