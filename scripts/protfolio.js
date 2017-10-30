(function($){
	'use strict';
	var $window = $(window);
	var pageLoded = 0;
	var onIntro = 1;
	var $intro = $('.intro');
	var $projectIcons = $('.icon-section');
	var $projectLink = $('#link-to-project');
	var $homeLogo = $('#logo');
	var $navHome = $('#nav-home');
	var $linkBackHome = $('#logo, #nav-home, #link-project-home');
	var edge = navigator.userAgent.indexOf("Edge") > -1;
	let currentYear = (new Date).getFullYear();
	
	$('.animation-wrap .animation-cover').fadeOut(1500);//open animation
	openAnimation();

	$(window).on('load', function(){//set pagestatus = loaded after page load
		pageLoded = 1;		
		iconParallax();//load icon effect after page load, to avoide conflict with slick.js
	});

	sectionControl();
	navControl();
	backgroundLogoAnimation();
	mainLogoResize();
	lightBox();

	$('footer p').text(`${currentYear} Chun Te Wu`);


	function openAnimation(){//open animation function

		let logoStroke = anime({
			targets: '.animation-wrap #box-fill-in',
			strokeDashoffset: function(el) {
				return [el.getAttribute('stroke-dasharray'), 0]
			},
			duration: 1500,
		delay:300,//delay in the beginning
		easing: 'easeInQuint',
		opacity: 1,
		offset: 0
	});



		let logoCStroke = anime({
			targets: '.animation-wrap #c-stroke',
			strokeDashoffset: [anime.setDashoffset, 0],
			duration: 1500,
		delay:1500,//delay in the beginning
		easing: 'easeInOutSine',
		opacity: 1,
		offset: 0
	});


		let logoWStroke = anime({
			targets: '.animation-wrap #w-stroke',
			strokeDashoffset: [anime.setDashoffset, 0],
			duration: 1500,
		delay:1500,//delay in the beginning
		easing: 'easeInOutSine',
		opacity: 1,
		offset: 0
	});

		let logoCFill = anime({
			targets: '.animation-wrap #c-fill-in',
		strokeDashoffset: function(el) {
			return [el.getAttribute('stroke-dasharray'), 0]
		},
		duration: 1700,
		delay:3500,//delay in the beginning
		easing: 'easeOutElastic',
		opacity: 1,
		offset: 0
	});

		let logoWFill1 = anime({
			targets: '.animation-wrap #w-fill1-in',
			strokeDashoffset: [anime.setDashoffset, 0],
			strokeDashoffset: function(el) {
				return [el.getAttribute('stroke-dasharray'), 0]
			},
			duration: 1500,
		delay:3900,//delay in the beginning
		easing: 'easeOutElastic',
		opacity: 1,
		offset: 0
	});

		let logoWFill2 = anime({
			targets: '.animation-wrap #w-fill2-in',
			strokeDashoffset: [anime.setDashoffset, 0],
			strokeDashoffset: function(el) {
				return [el.getAttribute('stroke-dasharray'), 0]
			},
			duration: 1500,
		delay:4300,//delay in the beginning
		easing: 'easeOutElastic',
		opacity: 1,
		offset: 0
	});

		let logoWFill3 = anime({
			targets: '.animation-wrap #w-fill3-in',
			strokeDashoffset: [anime.setDashoffset, 0],
			strokeDashoffset: function(el) {
				return [el.getAttribute('stroke-dasharray'), 0]
			},
			duration: 1500,
		delay:4400,//delay in the beginning
		easing: 'easeOutElastic',
		opacity: 1,
		offset: 0
	});

		logoWFill3.complete = function(){
			if (window.matchMedia('(min-width: 1025px)').matches) {
				if (pageLoded) {
					$('.slidAnimation').fadeIn(0);
					$('.slidAnimation').animate({
						width: '100%'
					}, 500, function(){
						$('.animation-wrap').fadeOut(0);
						$('.slidAnimation').animate({
							width: '100px'
						}, 500, function(){
							$('.slidAnimation').fadeOut(1500);
						});
					});
				}
		    } 
		    else  {
		    	if (pageLoded) {
					$('.slidAnimation').fadeIn(0);
					$('.slidAnimation').animate({
						height: '100vh'
					}, 500, function(){
						$('.animation-wrap').fadeOut(0);
						$('.slidAnimation').animate({
							height: '75px'
						}, 500, function(){
							$('.slidAnimation').fadeOut(1500);
						});
					});
				}

		    }

		};

	}

	function smallLogoAnimation($selector){
		let logoStroke = anime({
			targets: $selector,
			strokeDashoffset: function(el) {
				return [el.getAttribute('stroke-dasharray'), 0]
			},
			duration: 2500,
			delay:200,//delay in the beginning
			easing: 'linear',
			opacity: 1,
			loop: false,
			offset: 0
		});
	}

	function backgroundLogoAnimation(){
		$( window ).on( "mousemove", function( event ) {
			var mouseX = event.pageX;
			var windowCenter = $window.width() / 2;
			var animateX = (mouseX - windowCenter) * 0.01 + 'px';
			$('.mainheader .mainLogo svg').animate({
				left: animateX,
			}, 5);
			
		});
	}

	function navControl(){

		$("#logo").on('mouseenter', function(){//expend the menu list
			smallLogoAnimation('nav svg #box-fill-in');
		});

		$(".menuIcon, .menuList .closeMenu").on('click', function(){//expend the menu list
			$('nav').toggleClass('showMenuList');
			$('nav').removeClass('showAboutMe');
			$('.aboutMe').getNiceScroll().remove();
		});
		$("#aboutMeLink, #linkAbout").on('click', function(){//expend the about me section
			$('nav').toggleClass('showAboutMe');
			$('nav').removeClass('showMenuList');
			if ( $('nav').hasClass('showAboutMe') && !edge && window.matchMedia('(min-width: 1025px)').matches) {
				setTimeout(function(){
					$('.aboutMe').niceScroll();
				}, 1000);
				
			}else{
				setTimeout(function(){
					$('.aboutMe').getNiceScroll().remove();
				}, 1000);
				
			}
			
		});

		$linkBackHome.on('click', function(){//when home link is clicked
			$('nav').removeClass('showAboutMe');
			$('nav').removeClass('showMenuList');
			setTimeout(function(){
				$('.aboutMe').getNiceScroll().remove();
			}, 1000);


			$('#link-project-home').animate({
				top: '-40px',
			});

			$('.icon-section').animate({
				scrollTop: 0,
			});

		});

		$('#projects').on('click', function(){//close the nav when porject is clicked
			$('nav').removeClass('showMenuList');
		});


		$('.aboutMe .closeMenu').on('click', function(){//when X on About page
			$('nav').removeClass('showAboutMe');

			setTimeout(function(){
				$('.aboutMe').getNiceScroll().remove();
			}, 1000);

		});

	}




	function sectionControl(){
		
		$('#link-to-project, #projects').on('click', function(){
			if (onIntro && window.matchMedia('(min-width: 1025px)').matches) {
				onIntro = 0;
				$intro.animate({//move up intro section
					top: '20px',
				}, 100, function(){
					$intro.animate({
						top: '-100vh',
					}, 700);
				});

				$('.page-wrapper').addClass('move-link-to-project');

				setTimeout(function(){
					$projectIcons.animate({//move up icon section
						top: '0',
					},700, function(){
						$('#link-project-home').animate({
							top: '40px',
						}, 100);


					});
				}, 100);

			}else{

				if (window.matchMedia('(min-width: 1025px)').matches) {

					$('.icon-section').animate({
						scrollTop: 0,
					});
					$('.project-detail').animate({
						top: '100vh',
					});
					$(".project-detail .closeMenu").fadeOut();

				}else{
					$('.page-wrapper').animate({
						scrollTop: $projectIcons.offset().top -75
					});
					$('.project-detail').animate({
						right: '100vw',
						opacity: '0',
					});
				}
				

			}
			
		});


		$linkBackHome.on('click', function(e){
			if (!onIntro && window.matchMedia('(min-width: 1025px)').matches) {
				onIntro = 1;
				$intro.animate({//move intro back
					top: '0',
				}, 700);

				setTimeout(function(){
					$('.page-wrapper').removeClass('move-link-to-project');
				}, 700);

				$projectIcons.animate({//move project link section under
					top: '100vh',
				}, 700);

				$('.project-detail').animate({
					top: '100vh',
				});
				$(".project-detail .closeMenu").fadeOut();

			}else{
				e.preventDefault();
			    $('.page-wrapper').animate({//scroll the page to the top
			        scrollTop: '0',
			    }, 500);
			    $('.project-detail').animate({
					right: '100vw',
					opacity: '0',
					scrollTop: '0',
				});
			}


		});


		if(window.matchMedia('(min-width: 1025px)').matches){
			$(".icon-wrapper").on('mouseenter', function(){// when project icon is hovered, short info
				var borderColor = $(this).children( ".hidden-project-info" ).css('border-left');
				var theTitle = $(this).children( ".hidden-project-info" ).children('h1').text();
				var theContent = $(this).children( ".hidden-project-info" ).children('p').text();
				var $projectInfo = $('.project-info');
				$projectInfo.css('border-left', borderColor);
				$projectInfo.children('h3').text(theTitle);
				$projectInfo.children('p').text(theContent);
				$('.project-info').fadeIn();
			});
		}

		$(".icon-wrapper").on('mouseleave', function(){// when project icon is not hovered, hide short info
			$('.project-info').fadeOut(50);

		});

		$(".icon-wrapper").on('click', function(e){// when project icon is click, control the project section
			var theProjectSelected = '.project-' + $(this).children( ".hidden-name" ).text();

			if(window.matchMedia('(min-width: 1025px)').matches){

				$(theProjectSelected).animate({
					top: '0',
				});

			} else{


				$(theProjectSelected).animate({
					right: '0',
					opacity: '1',
				});

			}

			$(".project-detail .closeMenu").fadeIn();

		});

		$(".project-detail .closeMenu").on('click', function(){//when the closing project X is clicked
			if(window.matchMedia('(min-width: 1025px)').matches){
				$('.project-detail').animate({
					top: '100vh',
				});
			}else{
				$('.project-detail').animate({
					right: '100vw',
					opacity: '0',
					scrollTop: '0',
				});
			}
			
			$(".project-detail .closeMenu").fadeOut();

		});

		if(window.matchMedia('(min-width: 1025px)').matches){// when on desktop
			$('.project-images').niceScroll();//appply special scrolling bar to project images
			$('.project-description').niceScroll();//appply special scrolling bar to project detail
		}

		$(".portfolio-icon").on('mouseenter', function(){//expend the menu list
			smallLogoAnimation('.icon-wrapper .portfolio-icon svg #box-fill-in');
		});
		
		
	}

	function iconParallax(){
		$('.icon').parallaxify({//icons parallax effect
			horizontalParallax: true,
			verticalParallax: true,
			parallaxBackgrounds: true,
			parallaxElements: true,
			positionProperty: 'position',
			responsive: true,
			useMouseMove: true,
			useGyroscope: true,
			motionAngleX: 80,
			motionAngleY: 80,
		});

	}

	function mainLogoResize(){
		var $mainheader = $('.mainheader');
		var $mainLogo = $('.mainLogo');

		

		if ($mainLogo.height() > $mainheader.height()) {
			$mainLogo.width($mainheader.height() - 50);
		}

		$window.on('resize', function(){
			var oriHight = $mainLogo.height();
			if (oriHight > $mainheader.height()) {
				$mainLogo.width($mainheader.height() - 50);
			}else{
				$mainLogo.width(oriHight);
			}

		});
		
	}


	function lightBox(){
		$(".icon-wrapper").each(function(){
			var theProjectSelected = '.project-' + $(this).children( ".hidden-name" ).text() + ' .lazyload a';
			$(theProjectSelected).simpleLightbox();

		});
		
	}


})(jQuery);








