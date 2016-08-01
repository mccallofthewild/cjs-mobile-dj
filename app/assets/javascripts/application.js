//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
	// ------------ GLITCH ANIMATION -----------
	
	setInterval( function(){ 
			var x = 10 - Math.random() * 20; 
			var y = 3 - Math.random() * 6;
			var f = 3 - Math.random() * 6; 
			var g = 3 - Math.random() * 6;
			var z = 15 - Math.random() * 30; 
			var k = 5 - Math.random() * 10; 
			
			var colorOne = 255 * Math.random();
			var colorTwo = 255 * Math.random();
			var colorThree = 255 * Math.random();
			
			var colorFour = 255 * Math.random();
			
			var colorFive = 255 * Math.random();
			
			var colorSix = 255 * Math.random();
			
			var opacity = 1.3 - Math.random();
			
			var textOpacity = 1.5 - Math.random();
			
			
			var textColor = 'rgba(255, 255, 255, ' + textOpacity + ')';
			
			var d = Math.round(x) + 'px ' + Math.round(y) + 'px' + ' rgba(' + Math.round(colorOne) + ',' + '0' + ',' + Math.round(colorThree) + ',' + opacity + ')'; 
			var v = Math.round(z) + 'px ' + Math.round(k) + 'px' + ' rgba(' + '0' + ', ' + Math.round(colorFive) + ', ' + Math.round(colorSix) + ', ' + opacity + ')'; 
			var a =  d + ', ' + v
			
			var e = 'translate(' + f + 'px' + ',' + g + 'px' + ')';
			
			$('.text-area').css({ 
			'transform': e , 
			'text-shadow': a ,
			'color': textColor
			});
		}, 50);
		
	// ----------- GLITCH ANIMATION END -------------
		
		
		
	
	// ----------- TIMER FUNCTIONS ------------
	var a = 3000;
	var b = 0;
	var power = ["IGNITE", "INSPIRE", "MOVE", "HELP", "CHANGE", "BUILD", "CHARGE", "LEAD", "RENEW", "IMPROVE", "ENCHANT", "RISE", "CHALLENGE", "CREATE", "THRILL", "SENSE", "DISCOVER", "AMAZE", ""];
	var feel = ["FREE", "STRONG", "BRAVE", "ADVENTUROUS", "CURIOUS", "BOLD", "BRILLIANT", "WARM", "LUCKY", "VIVID","FANTASTIC", "INCREDIBLE", "ALIVE", "ALIVE", ""];
	function runWords(i, array){
		b = Math.random() * 500;
		a = a + b;
		setTimeout(function(){$('.text-area').html(array[i]);}, a);

	}
	function runRunWords(array){
		for(i=0; i < array.length; i++){
			runWords(i, array);
	
		}
	}	
		
	setTimeout(function(){$('.text-area').html("<span class='sentence-text'>A RHYTHM HAS THE POWER TO</span>");}, 0 );


	setTimeout(runRunWords(power), 3000);
	setTimeout(function(){$('.text-area').html("<span class='sentence-text'>A BEAT CAN MAKE YOU FEEL</span>");}, 9000);
	setTimeout(function(){runRunWords(feel);}, 5000);

	setTimeout(function(){$('.text-area-wrap').html("<span class='pulse'></span>");}, 17000);
setTimeout(function(){	$('.real-text').show();}, 19000);
setTimeout(function(){	$('.real-text:eq(1)').addClass("glitch-mob");}, 27500);
setTimeout(function(){	$('.real-text:eq(1)').html("BOISE, ID <p class='record-img' description='record; Created by Mauvais Poil'></p> EST. A FEW YEARS AGO");}, 28000);
setTimeout(function(){	$('.real-text:eq(1)').removeClass("glitch-mob");}, 28250);


	//---------- TIMER FUNCTIONS END

	// ----------- TIMER FUNCTIONS SKIP

// 	setTimeout(function(){$('.text-area-wrap').html("<span class='pulse'></span>");}, 0);
// setTimeout(function(){	$('.real-text').show(); $('.real-text:eq(1)').html("BOISE, ID <p class='record-img' description='record; Created by Mauvais Poil'></p> EST. A FEW YEARS AGO");}, 2000);
// setTimeout(function(){	$('.real-text:eq(1)').addClass("glitch-mob");}, 10500);
// setTimeout(function(){	$('.real-text:eq(1)').html("BOISE, ID <p class='record-img' description='record; Created by Mauvais Poil'></p> EST. A FEW YEARS AGO");}, 10500);
// setTimeout(function(){	$('.real-text:eq(1)').removeClass("glitch-mob");}, 11250);

	// SKIP COMPLETE

	//-------------- EVENT LISTENER FUNCTIONS

function hoverText(selector, text, bgColor, bgImage){
	$(selector + ':eq(1)').css({'opacity':'0'});
	// $(selector).hover(
// 		function(){
// 			$(selector).first().animate({'opacity':'0'}, 1000, 'linear');
// 			$(selector + ':eq(1)').animate({'opacity':'1'}, 900, 'linear');
// 		},
// 		function(){
// 			$(selector).first().animate({'opacity':'1'});
// 			$(selector + ':eq(1)').animate({'opacity':'0'});
// 		}
// 	);
}
var events = ['.weddings', '.parties', '.dances', '.special-events']

var eventText = ['make your wedding a beautiful one.', 'Make your party rock.', 'Dance your pants off', 'special-events']

var eventColor = ['rgba(34, 40, 49, 0.9)', 'rgba(238,238,238,0.9)', 'rgba(238,238,238,0.9)', 'rgba(34, 40, 49, 0.9)' ]

var eventImage = ['weddings.svg', 'parties.svg', 'dances.svg', 'special-events.svg']

for(i = 0; i < 4; i++){
	hoverText(events[i], eventText[i], eventColor[i], eventImage[i] )
}


// -------------- EVENT LISTENER FUNCTIONS END



});