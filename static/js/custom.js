(function($){
    "use strict"
    let HOMEPAGE = {};
    $.fn.exists = function () {
        return this.length > 0;
    };

    /*--------------------
        * Header Class
    ----------------------*/
    HOMEPAGE.HeaderSticky = function(){
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $(".navbar").addClass("fixed-header")
        });
    }

    /*--------------------
    * Pre Load
    ----------------------*/
    HOMEPAGE.WebLoad = function(){
      document.getElementById("loading").style.display = "none"; 
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    HOMEPAGE.MenuClose = function(){
      $(".toggler-menu").on('click', function(){
        $(this).toggleClass('open');
        $('.nav_menu').stop().toggleClass('menu-open');
        $('.nav_menu .navbar-nav').toggleClass('nav-open');
      });
      $('.nav_menu .nav-link').on('click', function() {
       let toggle = $('.toggler-menu').is(':visible');
       if (toggle) {
        $('.toggler-menu').removeClass('open');
         $('.nav_menu').removeClass('menu-open');
         $('.nav_menu .navbar-nav').toggleClass('nav-open');
       }
      });
    }

    /*--------------------
        * Smooth Scroll
    ----------------------*/
    HOMEPAGE.HeaderScroll = function(){
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              let target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 87,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*--------------------
        * Header Fixed
    ----------------------*/
    HOMEPAGE.HeaderFixed = function(){
        if ($(window).scrollTop() >= 60) {
           $('.navbar').addClass('fixed-header');
        }
        else {
           $('.navbar').removeClass('fixed-header');
        }
    }

    /*--------------------
        * Tyoe It
    ----------------------*/
    HOMEPAGE.mTypeIt = function() {
      if ($("#type-it").exists()){
      loadScript(plugin_track + 'typeit-master/typeit.min.js', function() {
        if ($("#type-it").exists()){
          new TypeIt('#type-it', {
                  speed: 200,
                  loop:true,
                  strings: [
                    'Web Designer',
                    'Web Developer',
                    'Coffee lover'
                  ],
                  breakLines: false
              }); 
        }
        });
      }
    }

    /*--------------------
        * Progress Bar 
    ----------------------*/
    HOMEPAGE.ProgressBar = function(){
        $(".progress .progress-bar").each(function () {
          let bottom_object = $(this).offset().top + $(this).outerHeight();
          let bottom_window = $(window).scrollTop() + $(window).height();
          let progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
    * Counter JS
    ----------------------*/
    let a = 0;
    HOMEPAGE.Counter = function(){
      let oTop = $('.counter-box').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
          a = 1;
        }
    }

    /*--------------------
    * owl Slider
    ----------------------*/
    HOMEPAGE.OwlSlider = function () {
      if ($(".owl-carousel").exists()){
        loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
          if ($(".owl-carousel").exists()){
            let testimonials_slider = $('#client-slider-single');
            testimonials_slider.owlCarousel({
              loop: true,
              margin: 0,
              nav:false,
              items:1
            });
          }
        });
      }
    }

    /*--------------------
    * Isotope
    ----------------------*/
    HOMEPAGE.MasoNry = function () {
      let portfolioWork = $('.portfolio-content');
      if ($(".portfolio-content").exists()){
        loadScript(plugin_track + 'isotope/isotope.pkgd.min.js', function() {
          if ($(".portfolio-content").exists()){
              $(portfolioWork).isotope({
                resizable: false,
                itemSelector: '.portfolio-item',
                layoutMode: 'masonry',
                filter: '*'
              });
              //Filtering items on portfolio.html
              let portfolioFilter = $('.filter li');
              // filter items on button click
              $(portfolioFilter).on( 'click', function() {
                let filterValue = $(this).attr('data-filter');
                portfolioWork.isotope({ filter: filterValue });
              });
              //Add/remove class on filter list
              $(portfolioFilter).on( 'click', function() {
                $(this).addClass('active').siblings().removeClass('active');
              });
          }
        });
      }
  }

    /* ---------------------------------------------- /*
   * All Functions
  /* ---------------------------------------------- */
    // loadScript
    let _arr  = {};
    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
          _arr[scriptName] = true;
          let body    = document.getElementsByTagName('body')[0];
          let script    = document.createElement('script');
          script.type   = 'text/javascript';
          script.src    = scriptName;
          // then bind the event to the callback function
          // there are several events for cross browser compatibility
          // script.onreadystatechange = callback;
          script.onload = callback;
          // fire the loading
          body.appendChild(script);
        } else if (callback) {
          callback();
        }
    };

    // Window on Load
    $(window).on("load", function(){
      HOMEPAGE.WebLoad();
    });

    // Document On Ready
    $(document).on("ready", function(){
        HOMEPAGE.OwlSlider(),
        HOMEPAGE.MenuClose(),
        HOMEPAGE.Counter(),
        HOMEPAGE.ProgressBar(),
        HOMEPAGE.mTypeIt(),
        HOMEPAGE.HeaderScroll(),
        HOMEPAGE.MasoNry(),
        HOMEPAGE.HeaderSticky();
    });

    // Document on scroll
    $(window).on("scroll", function(){
        HOMEPAGE.Counter(),
        HOMEPAGE.ProgressBar(),
        HOMEPAGE.HeaderFixed();
    });

})(jQuery);


