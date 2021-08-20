/*
$(function(){

	var win = $(window);
	var vh = 0;
   $(window).load(function(){
		$('#header').addClass('load');
		$('#wrap.sub').find('#header').addClass('bgbg');
	});

	$('.winH').height(win.height());
    $(window).on('load resize',function(){
        $('.winH').height($(this).height());
        vh = $(window).height();
		if( $(this).width() < 1200 ){
			$('#left_menuWrap').removeClass('load');
			$('.mobileTab').removeClass('active');
		}else{
			$('#left_menuWrap').addClass('load');
		}
    });

	$('.btn_all_menu').click(function(e){
		e.preventDefault();
		if( $(this).hasClass('active') ){
			$('.allMenuWrap ').fadeOut(300);
		//	$('.allMenuWrap ').removeClass('show');
			$('#header').removeClass('active');
			$('.btn_all_menu').removeClass('active');
			$('.allMenu .hasDep2 .dep2').slideUp(250);
		}else{
			$('.allMenuWrap').fadeIn(300);
		//	$('.allMenuWrap ').addClass('show');
			$('#header').addClass('active');
			$('.btn_all_menu').addClass('active');
		}
		$('.mainVisual .mainTxt.active').css('z-index', '1').css('transition', '.01s linear');
	});


	$('.allMenu > li > span').mouseenter(function(){
		$('.allMenu > li').removeClass('active');
		$(this).parent('li').addClass('active');
	});

	$(window).on('load resize', function(){
		if(window.innerWidth > 1025){
		}else{
			$('.allMenu > li').removeClass('active');
			$('.allMenu > li > span').removeClass('active');
		}
	});

	
	

	$(window).on('load resize',function(){
	// Hide Header on on scroll down
		var didScroll = false;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('#header').outerHeight();

		$(window).scroll(function(event){
			
			//$('#header').addClass('scrolled');
			didScroll = true;
		});

		
			setInterval(function() {
				if (didScroll) {
					hasScrolled();
					didScroll = false;
				}
			}, 0);


		

		function hasScrolled() {
			var st = $(this).scrollTop();
			
			// Make sure they scroll more than delta
			if(Math.abs(lastScrollTop - st) <= delta)
				return;
			
			// If they scrolled down and are past the navbar, add class .nav-up.
			// This is necessary so you never see what is "behind" the navbar.
			
			//console.log(st-lastScrollTop);

			
			if (st > lastScrollTop && st > navbarHeight){
				// Scroll Down
				if($('#header').hasClass('active')){
				
				}else{
					$('#header').removeClass('nav-up').addClass('nav-down');
				}
				
			} else {
				// Scroll Up
				if(st + $(window).height() < $(document).height()) {
					$('#header').removeClass('nav-down').addClass('nav-up');
				}
			}
			
			lastScrollTop = st;
		}

		if(window.innerWidth > 1400){
			$('#header .gnbWrap #gnb > li > .dep2').removeAttr('style');
		}
	});

	$(window).on('load scroll', function(){
		$('#header').addClass('load');
		//$('#wrap.sub').find('#header').addClass('bgbg');

		if($('.subVisual ').length > 0 ){
			if($(window).scrollTop() >=  ($('.subVisual ').outerHeight() - $('#header').outerHeight())){
				$('#header').addClass('bgbg');
			}else{
				$('#header').removeClass('bgbg');
			}
		}else{
			if($(window).scrollTop() >=  ($(window).height() - $('#header').outerHeight())){
				$('#header').addClass('bgbg');
			}else{
				$('#header').removeClass('bgbg');
			}
		}
	});

	$('#scrTop').click(function(e){
		//e.preventDefault();
		$('html, body').animate({scrollTop: '0'}, 650, 'easeInCubic');	
	});

	$(window).on('load resize', function(){

	});
	*/
	/* gogo js */ 
	/*
	$.fn.isInViewport = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).outerHeight();

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height();

	  return (elementBottom > viewportTop + (vh/18))  && (elementTop < viewportBottom - (vh/18)) ;
	};

	$.fn.isInViewport2 = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).outerHeight();

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height();

	  return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(window).on('load resize scroll',function(){
		

		$('.subVisual, .subTit, .subContTit, .solutionSecTit, .solutionSecTit + p, .mc3_slide_sec1 ').each(function(){
			if($(this).isInViewport()){
				$(this).addClass('on');
			}
		});
		
		
		$('.aniBox').each(function(){
			if($(this).isInViewport()){
				$(this).addClass('gogo');
			}
		});

		$('.aniBox2').each(function(){
			if($(this).isInViewport2()){
				$(this).addClass('gogo');
			}
		});
	});




	
	/* elements height 동일하게 */
	/* 
	$(function(){
		function height_set(){
			var heights = $(".sameHeight").map(function (){
				return $(this).height();
			}).get();
			maxHeight = Math.max.apply(null, heights);
			$(".sameHeight").each(function(){
				$(this).height(maxHeight);
			});
		}
		height_set();
		$(window).on('load resize',function(){
			$(".sameHeight").removeAttr('style');
			height_set();
		});
	});
	
});



$(function(){
	$('.re .num').click(function(){
		$('.prPagination .num').removeClass('active');
		$(this).addClass('active');
	});
});

$(function(){
	$('.recruitType li').click(function(){
		$('.recruitType li').removeClass('active');
		$(this).addClass('active');
	});
});


var m= matchMedia("screen and (min-width:1025px)"); 

if(m.matches){
	$(window).on('scroll',function(){
		if($(this).scrollTop() > ($(document).height()-1350)) {
			$('#scrTop').addClass('active');
		}else{
			$('#scrTop').removeClass('active');
		}
	});
}

var m= matchMedia("screen and (max-width:1024px)"); 

if(m.matches){
	$(window).on('scroll',function(){
		if($(this).scrollTop() > ($(document).height()-1200)) {
			$('#scrTop').addClass('active');
		}else{
			$('#scrTop').removeClass('active');
		}
	});
}



$(function(){
	var lastScrollTop = 0,
		delta = 15;
	$(window).scroll(function (event) {
		var st = $(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= delta) return;
		if ((st > lastScrollTop) && (lastScrollTop > 0)) {
			$("#header").css("top", "-120px");
		} else {
			$("#header").css("top", "0px");
		}
		lastScrollTop = st;
	});
});
*/
$(function(){ 

$(window).on('scroll',function(){
	if(
	){
		$('.subTopArea').hide();
	}else{
		$('.subTopArea').show();
	}

	if($(this).scrollTop() > 1000){
		$('.main_visual_box').css('opacity',0);
	}else{
		$('.main_visual_box').css('opacity',1);
	}

})

$( ".welfare_list " ).swipe({
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			//console.log(direction);
			
			if (direction == 'right'){
				$('.welfare_control li.prev').trigger('click');
			}else if(direction == 'left'){
				$('.welfare_control li.next').trigger('click');
			}
		},
		 threshold:0
});


$('.pf_box').slick({
		dots: true,
		fade:true,
		arrows:false,
		appendDots:$('.pf_box_dot'),
		responsive: [
				
		{
			breakpoint: 1100,
			settings: {
				fade:false,
				arrows:true
			}
		},
		
	]
});
$('.pf_box').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	$('.business_tab li a').eq(nextSlide).trigger('click');
	
	if(nextSlide==0){ 
		$('.mc_business').addClass('web').removeClass('design solution maintenance ad');
	}else if(nextSlide==1){ 
		$('.mc_business').addClass('design').removeClass('web solution maintenance ad');
	}else if(nextSlide==2){ 
		$('.mc_business').addClass('solution').removeClass('design web maintenance ad');
	}else if(nextSlide==3){ 
		$('.mc_business').addClass('maintenance').removeClass('design solution web ad');
	}else if(nextSlide==4){ 
		$('.mc_business').addClass('ad').removeClass('design solution maintenance web');
	}
});



	$(window).on('load resize',function(){
		
		if($(this).width()> 1100){
			
		}else{
				
			
		}
		
	});
mgnb();
/*
	$('.pf_box').slick({
				
				 
		
	
	});

	*/


	$('.notReady').on('click',function(e){
		e.preventDefault();
		alert('준비중입니다.');
	});

	$('.dep3_box_wrap').mouseenter(function(){
		
	});
	$('.dep3 > li').mouseenter(function(){
		
		console.log($(this).find('.dep3_box').height());
		
	});
	/*
	$('.dep3 > li').mouseenter(function(){
		
		$('.dep3_box_wrap').addClass('on').html($(this).find('.dep3_box').clone());
		
	});
	
	$('.dep3 > li').mouseleave(function(){
		
		$('.dep3_box_wrap').removeClass('on').html('');
		
	});
		
	*/
	var bgc = {
		"bgColor" : [
			{"bg":'#2c8aea'},
			{"bg":'#6622ad'},
			{"bg":'#ea2c5a'},
			{"bg":'#f69536'},
			{"bg":'#b1d40e'}
		]
	}
	
	
	
	$('.business_tab li a').on('click',function(e){ 
		e.preventDefault();
		var idx = $('.business_tab li a').index($(this));
		console.log(idx);
		$(this).parent('li').addClass('on').siblings().removeClass('on');
	

		$('.pf_box_dot li button').eq(idx).trigger('click'); 
	});
	$('.business_tab li').on('mouseenter',function(){
		var idx = $('.business_tab li').index($(this));
		$('.pf_box_dot li button').eq(idx).trigger('click'); 
	});
	

	/*
	$('.business_tab li').hover(function(){
		console.log($(this).data('business-type'));
		var idx = $('.business_tab li').index($(this));
		$(this).find('a').trigger('click');
		console.log(idx);
		$('.mc_business').stop().css({backgroundColor:bgc.bgColor[idx]['bg']},700);
	},function(){
		if($('.mc_business').hasClass('web')){
			
			$('.mc_business').stop().css({backgroundColor:bgc.bgColor[0]['bg']},700);
			
		}else if($('.mc_business').hasClass('design')){
			$('.mc_business').stop().css({backgroundColor:bgc.bgColor[1]['bg']},700);
			
		}else if($('.mc_business').hasClass('solution')){
			
			$('.mc_business').stop().css({backgroundColor:bgc.bgColor[2]['bg']},700);
		}else if($('.mc_business').hasClass('maintenance')){
			
			$('.mc_business').stop().css({backgroundColor:bgc.bgColor[3]['bg']},700);
		}else if($('.mc_business').hasClass('ad')){
			
			$('.mc_business').stop().css({backgroundColor:bgc.bgColor[4]['bg']},700);
		}
		
		
	});

	*/
		
	if($('.psS').is('.checked')){ 
		console.log('asdf');
	}else{ 
		
	}
	
	
	
	$('#gnb').hover(function(){
		$('.dim').stop().fadeIn(200);
	},function(){
		$('.dim').stop().fadeOut(200);
	});
	
/*
	$('.compete_list li a').on('click',function(e){ 
		e.preventDefault();
		var idx = $('.compete_list li a').index($(this));
		$('.compete_popup_wrap').fadeIn(200);
		$('.compete_popup_wrap > div').eq(idx).addClass('on');
	});
	$('.close_popup').on('click',function(){ 
		$('.compete_popup_wrap').fadeOut(200);
		$('.compete_popup_wrap > div').removeClass('on');
	});
*/

	$('.btn_file').on('click',function(e){ 
		e.preventDefault();
		$(this).parent().find('input[type=file]').trigger('click');

	});
	$('.file_wrap input[type=file]').on('change',function(){ 
		$(this).parent().find('input[type=text]').val($(this).val());
		$('.file_wrap input[type=text]').show();
	});

	
	snsBox();
	trigger();
	//prlx();
	subLoc();
	toTop();
	//portfolio();

welfare();

	var $container = jQuery('#masonry-grid');

		// initialize
		$(window).on('load',function(){ 
			$('.grid-item').animate({'opacity':'1'},300)
		});
		$container.masonry({

				  
					 
			  itemSelector: '.grid-item',
				  columnWidth: '.grid-sizer',
				percentPosition: true
				
			});


		$("#grid-filter input[type=button]").on("click", function() {

    group =$(this).val();
console.log(group);
    group_class = "." + group;
	
	if($(this).parent().hasClass('on')){ 
		 
	}else{ 
		$(this).parent().addClass('on').siblings().removeClass('on');
		$(".grid-item").hide();

        $(group_class).show();

        $('#masonry-grid').masonry('layout');
	}
	
});






	
	
	
});


function snsBox(){
	$(window).on('load',function(){
		$('.snsBox').delay(500).animate({'left':0},400);
		$('.rightBtns').addClass('on');
	});

}


function prlx(){
	$(window).on('scroll keydown',function(){
		var trigger = $(this).scrollTop()/1.63;
		
		$('.main_visual_box').css({top:trigger})
	});
}
function trigger(){
	

}



function subLoc(){
	$('.locDep > a').on('click',function(e){
		e.preventDefault();
		$(this).next('ul').toggle();
	});
	
	

}


function portfolio(){
	$(window).on('load resize',function(){
		var pfz = $('.box_noOv').height();
		console.log(pfz);
		$('.portfolio_list a').height(pfz);
		$('.box_ov').height(pfz);
		
	});
	
	
}



function welfare(){
	var idx = 0;
	
	$('.welfare_nav li a').on('click',function(e){
		e.preventDefault();
		idx = $('.welfare_nav li a').index($(this));
		//console.log(idx);
		$(this).parent('li').addClass('on').siblings().removeClass('on');
		$('.welfare_list div').eq(idx).addClass('on').siblings().removeClass('on');
		
	});

	$('.welfare_control li.prev').on('click',function(){
		if(idx<1){
			idx=9;
		
		}else{
			idx--;
		}
		
		console.log(idx);
		$('.welfare_nav li').eq(idx).addClass('on').siblings().removeClass('on');
		$('.welfare_list div').eq(idx).addClass('on').siblings().removeClass('on');

	
	});
	$('.welfare_control li.next').on('click',function(){
		if(idx>=9){
			idx=0;
		
		}else{
			idx++;
		}
		
		console.log(idx);
		$('.welfare_nav li').eq(idx).addClass('on').siblings().removeClass('on');
		$('.welfare_list div').eq(idx).addClass('on').siblings().removeClass('on');

	
	});

}
	
	


function mgnb(){
	
	$('.btn_gnb').on('click',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.gnb_m_wrap').removeClass('on');
		}else{
			$(this).addClass('on');
			$('.gnb_m_wrap').addClass('on');
		}
	});
	
	$('#m_gnb > li > a').on('click',function(e){
		$('#m_gnb .dep2').slideUp(200);
		$('#m_gnb .dep2 > li').removeClass('on');
		$('#m_gnb .dep3').slideUp(200);
		$('#m_gnb .dep3 > li').removeClass('on');

		e.preventDefault();
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$(this).next('.dep2').slideUp(200);
		}else{
			
			$(this).parent().addClass('on').siblings().removeClass('on');
			$(this).next('.dep2').slideDown(200);
		}
		

		
	});
	$('#m_gnb .hasDep3 > li > a').on('click',function(e){
			$('#m_gnb .dep3').slideUp(200);
			$('#m_gnb .dep3 > li').removeClass('on');
			e.preventDefault();
			if($(this).parent().hasClass('on')){
				$(this).parent().removeClass('on');
				$(this).next('.dep3').slideUp(200);
			}else{
				
				$(this).parent().addClass('on').siblings().removeClass('on');
				$(this).next('.dep3').slideDown(200);
			}
		});

}
function toTop(){
	
	$(window).on('scroll',function(){
		if($(this).scrollTop()>0){
			$('.toTop').addClass('on');
		}else{
			$('.toTop').removeClass('on');
		}
	});
	
	$('.toTop').on('click',function(){
		$('html, body').stop().animate({'scrollTop':0},500,'easeInOutCubic');
	});

	$('.goToTop').on('click',function(e){
		e.preventDefault();
		$('html, body').stop().animate({'scrollTop':0},500,'easeInOutCubic');
	});
}
