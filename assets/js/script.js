/* 
--------------------------------------------------------------------
Template Name: 	    Greenville Outdoor Living
Version:            1.00
Author:             Zahid Hasan Munna | Developer Zahid
Author Occupation: 	Frontend Web Design & Developer
Author Whatsapp:    https://wa.me/8801992409030
Author Linkedin:    https://www.linkedin.com/in/zahid-hasan-munna/
Author Facebook:    https://www.facebook.com/coderexpertzahid/
Author Website:     https://developer-zahid-portfolio.netlify.app/
Author Email: 	    dgtaltechzahidhasan@gmail.com
---------------------------------------------------------------------
*/

(function ($) {
    "use strict"

	/* Preloader init */
	function preLoader(){
		if($(".preloader").length > 0){
			$(".preloader").delay(300).fadeOut("slow")
		}
	}

	function getScrollbarWidth(){
		return (window.innerWidth - $(document).width())
	}

	function calculateVerticalHeight() {
		var vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', vh + 'px')
	}

	function calculateHeaderHeight(){
		$('html').css('--header-size', $('header').innerHeight() +'px')
	}

	function calculateNavbarOffsetDistance(){
		$('.navbar-nav').css('--_navbar-offset-right', ($(document).width() - $('.navbar-nav').get(0).getBoundingClientRect().right) +'px')
	}

	/* Window on load Event */
	$(window).on('load', function () {
        preLoader()
    })
	
	/* Document on ready Event */
	$(document).ready(function () {
		calculateVerticalHeight()
		calculateHeaderHeight()
		calculateNavbarOffsetDistance()
		getScrollbarWidth()

		/* lazy load map iframe */
		if($('[data-iframe-src]').length){
			setTimeout(()=>{
				$('[data-iframe-src]').each(function(){
					$(this).html(`<iframe src="${$(this).attr("data-iframe-src")}" style="border:0;" allowfullscreen frameborder="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
				})
			}, 2500)
		}
	})

	/* Window on scroll Event */
	$(window).on("scroll", function () {
		let scrolling = $(this).scrollTop()
		const maxHeaderScroll = 100
		if (scrolling > maxHeaderScroll) {
			$(".header").addClass('sticky')
		} else {
			$(".header").removeClass('sticky')
		}
	})

	/* Window on resize Event */
	$(window).on('resize', function () {
		calculateVerticalHeight()
		calculateHeaderHeight()
		calculateNavbarOffsetDistance()
    })

})(jQuery)