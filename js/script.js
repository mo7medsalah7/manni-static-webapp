$(window).on('scroll', function() {
		
		"use strict";
								
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/	
		
		var b = $(window).scrollTop();
		
		if( b > 72 ){		
			$(".navbar").addClass("scrolledNav");
		} else {
			$(".navbar").removeClass("scrolledNav");
		}
				

});


$(document).ready(function() {
			
		"use strict";

		/*----------------------------------------------------*/
		/*	Scroll To Element (Scrolling To Section After Clicking On Its Name In Navbar)
		/*----------------------------------------------------*/	
		
			$('.navbar li a').on('click', function(e){
				e.preventDefault();
				$('html, body').animate({
					scrollTop: $('#' + $(this).data('scroll')).offset().top
				}, 1000);
			});



		/*----------------------------------------------------*/
		/*	PopUp Scroll
		/*----------------------------------------------------*/	

		$('.video-popup').magnificPopup({
		    type: 'iframe',
		  	  
				iframe: {
					patterns: {
						youtube: {
			   
							index: 'youtube.com',
							src: 'https://www.youtube.com/embed/YQswjsiZtl4'
				
								}
							}
						}		  		  
		});

		/*----------------------------------------------------*/
		/*	Gallery Swiper
		/*----------------------------------------------------*/	
		 var swiper = new Swiper('.gallery .swiper-container', {
		      effect: 'coverflow',
		      grabCursor: true,
		      centeredSlides: true,
		      slidesPerView: 'auto',
		      loop: true,
		      spaceBetween: 40,
		      coverflowEffect: {
		        rotate: 30,
		        stretch: 0,
		        depth: 100,
		        modifier: 1,
		        slideShadows : false,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		      },
		   //    autoplay: {
			  //   delay: 3000,
			  // },

		    });

		/*----------------------------------------------------*/
		/*	Team Swiper
		/*----------------------------------------------------*/	
		  var swiper = new Swiper('.team .swiper-container', {
		      slidesPerView: 'auto',
		      spaceBetween: 50,
		      loop: true,
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		   //    autoplay: {
			  //   delay: 3000,
			  // },

		    });

///****Accordion in FAQ ******///

	(function($) {

    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion a').on('click', function(j) {
        var dropDown = $(this).closest('li').find('p');
        $(this).closest('.accordion').find('p').not(dropDown).slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();

    });
    })(jQuery);

	///****Accordion in FAQ ******///
});