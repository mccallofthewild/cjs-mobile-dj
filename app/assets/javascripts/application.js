//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
	var a = 3000;
	var b = 0;
	var power = ["IGNITE", "INSPIRE", "MOVE", "HELP", "CHANGE", "BUILD", "CHARGE", "LEAD", "RENEW", "IMPROVE", "ENCHANT", "RISE", "CHALLENGE", "CREATE", "THRILL", "SENSE", "DISCOVER", "AMAZE", ""];
	var feel = ["FREE", "STRONG", "COURAGEOUS", "ADVENTUROUS", "CURIOUS", "BOLD", "BRILLIANT", "WARM", "LUCKY", "CAREFREE", "MAGICAL","FANTASTIC", "INCREDIBLE", "ALIVE", ""];
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
	setTimeout(function(){$('.text-area').html("<span class='sentence-text'>Music has the power to</span>");}, 0 );
	
	
	setTimeout(runRunWords(power), 3000);
	setTimeout(function(){$('.text-area').html("<span class='sentence-text'>IT CAN MAKE YOU FEEL</span>");}, 9000);
	setTimeout(function(){runRunWords(feel);}, 3000);
	
	setTimeout(function(){$('.text-area-wrap').html("<span class='text-area pulse-text cardiac-rhythm'>GIVE YOUR NEXT EVENT A PULSE</span><br><br><span class='pulse'></span>");$('body').css('animation', 'rhythm-bg 3s infinite')}, 17000);
	setTimeout(function(){$('.cardiac-rhythm').addClass('animated fadeOut')}, 19000);
	
	
	
	
})