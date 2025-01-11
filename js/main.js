AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
  });
  
  (function($) {
	"use strict";
  
	$(document).ready(function() {
  
	  $(".loader").delay(1000).fadeOut("slow");
	  $("#overlayer").delay(1000).fadeOut("slow");
  
	  var siteMenuClone = function() {
		$('.js-clone-nav').each(function() {
		  var $this = $(this);
		  $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});
  
		setTimeout(function() {
		  var counter = 0;
		  $('.site-mobile-menu .has-children').each(function() {
			var $this = $(this);
			$this.prepend('<span class="arrow-collapse collapsed"></span>');
			$this.find('.arrow-collapse').attr({
			  'data-toggle': 'collapse',
			  'data-target': '#collapseItem' + counter,
			});
			$this.find('> ul').attr({
			  'class': 'collapse',
			  'id': 'collapseItem' + counter,
			});
			counter++;
		  });
		}, 1000);
  
		$(document).on('click', '.arrow-collapse', function(e) {
		  var $this = $(this);
		  if ($this.closest('li').find('.collapse').hasClass('show')) {
			$this.removeClass('active');
		  } else {
			$this.addClass('active');
		  }
		  e.preventDefault();
		});
  
		$(window).resize(function() {
		  var $this = $(this), w = $this.width();
		  if (w > 768) {
			if ($('body').hasClass('offcanvas-menu')) {
			  $('body').removeClass('offcanvas-menu');
			}
		  }
		});
  
		$(document).on('click', '.js-menu-toggle', function(e) {
		  var $this = $(this);
		  e.preventDefault();
		  if ($('body').hasClass('offcanvas-menu')) {
			$('body').removeClass('offcanvas-menu');
			$this.removeClass('active');
		  } else {
			$('body').addClass('offcanvas-menu');
			$this.addClass('active');
		  }
		});
  
		$(document).mouseup(function(e) {
		  var container = $(".site-mobile-menu");
		  if (!container.is(e.target) && container.has(e.target).length === 0) {
			if ($('body').hasClass('offcanvas-menu')) {
			  $('body').removeClass('offcanvas-menu');
			}
		  }
		});
	  };
	  siteMenuClone();
  
	  // Site carousel function
	  var siteCarousel = function() {
		if ($('.nonloop-block-13').length > 0) {
		  $('.nonloop-block-13').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive: {
			  600: {
				margin: 0,
				nav: true,
				items: 2
			  },
			  1000: {
				margin: 0,
				stagePadding: 0,
				nav: true,
				items: 3
			  },
			  1200: {
				margin: 0,
				stagePadding: 0,
				nav: true,
				items: 4
			  }
			}
		  });
		}
  
		$('.single-text').owlCarousel({
		  center: false,
		  items: 1,
		  loop: true,
		  stagePadding: 0,
		  margin: 0,
		  autoplay: true,
		  pauseOnHover: false,
		  nav: false,
		  smartSpeed: 1000,
		});
		$('.slide-one-item').owlCarousel({
		  center: false,
		  items: 1,
		  loop: true,
		  stagePadding: 0,
		  margin: 0,
		  autoplay: true,
		  smartSpeed: 1000,
		  pauseOnHover: false,
		  nav: true,
		  navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
  
		$('.slide-one-item-alt').owlCarousel({
		  center: false,
		  items: 1,
		  loop: true,
		  stagePadding: 0,
		  margin: 0,
		  smartSpeed: 1000,
		  autoplay: true,
		  pauseOnHover: true,
		  mouseDrag: false,
		  touchDrag: false,
		});
		$('.slide-one-item-alt-text').owlCarousel({
		  center: false,
		  items: 1,
		  loop: true,
		  stagePadding: 0,
		  margin: 0,
		  smartSpeed: 1000,
		  autoplay: true,
		  pauseOnHover: true,
		  mouseDrag: false,
		  touchDrag: false,
		});
  
		$('.custom-next').click(function(e) {
		  e.preventDefault();
		  $('.slide-one-item-alt').trigger('next.owl.carousel');
		  $('.slide-one-item-alt-text').trigger('next.owl.carousel');
		});
		$('.custom-prev').click(function(e) {
		  e.preventDefault();
		  $('.slide-one-item-alt').trigger('prev.owl.carousel');
		  $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
		});
	  };
	  siteCarousel();
  
	  var siteSticky = function() {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	  };
	  siteSticky();
  
	  var siteScroll = function() {
		$(window).scroll(function() {
		  var st = $(this).scrollTop();
		  if (st > 100) {
			$('.js-sticky-header').addClass('shrink');
		  } else {
			$('.js-sticky-header').removeClass('shrink');
		  }
		});
	  };
	  siteScroll();
  
	  var siteIsotope = function() {
		var $container = $('#posts').isotope({
		  itemSelector: '.item',
		  isFitWidth: true
		});
  
		$(window).resize(function() {
		  $container.isotope({
			columnWidth: '.col-sm-3'
		  });
		});
  
		$container.isotope({ filter: '*' });
  
		$('#filters').on('click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $container.isotope({ filter: filterValue });
		  $('#filters button').removeClass('active');
		  $(this).addClass('active');
		});
	  };
	  siteIsotope();
  
	  $('.fancybox').on('click', function() {
		var visibleLinks = $('.fancybox');
		$.fancybox.open(visibleLinks, {}, visibleLinks.index(this));
		return false;
	  });
  
	  let calcScrollValue = () => {
		let scrollProgress = document.getElementById("progress");
		let progressValue = document.getElementById("progress-value");
		let pos = document.documentElement.scrollTop;
		let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		let scrollValue = Math.round((pos * 100) / calcHeight);
		if (pos > 100) {
		  scrollProgress.style.display = "grid";
		} else {
		  scrollProgress.style.display = "none";
		}
		scrollProgress.addEventListener("click", () => {
		  document.documentElement.scrollTop = 0;
		});
		scrollProgress.style.background = `conic-gradient(#cc0018 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
	  };
  
	  window.onscroll = calcScrollValue;
	  window.onload = calcScrollValue;
  
	});
  })(jQuery);

  