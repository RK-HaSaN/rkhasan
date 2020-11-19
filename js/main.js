//for wow js

$(document).ready(function(){
  new WOW().init();
});

//for mixitup flugin
var config = document.querySelector('.mixcontent');
		 mixitup(config);

//for circle box
$(document).ready(function(){
	
    $('.circlechart').circlechart({});

});

//for Smoth Scroll
var scroll = new SmoothScroll('nav a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

//for navigation bar scroll Efect
$(window).on("scroll", function(){
	if($(window).scrollTop()) {
		$('nav').css({
			background : 'black',
			opacity : .7,
		})
	}

	else{
		$('nav').css({
			background : 'black',

			opacity : '1',
		})
	}
})

