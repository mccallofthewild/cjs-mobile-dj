//CANCEL = require jquery
//CANCEL = require jquery_ujs
//CANCEL = require turbolinks
//CANCEL = require angular.min
// /=/ require_tree .

$(document).ready(function () {
	// 	// ------------ GLITCH ANIMATION -----------

	function animateGlitchTextForPartyPage() {
		setInterval(function () {
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

			var d =
				Math.round(x) +
				'px ' +
				Math.round(y) +
				'px' +
				' rgba(' +
				Math.round(colorOne) +
				',' +
				'0' +
				',' +
				Math.round(colorThree) +
				',' +
				opacity +
				')';
			var v =
				Math.round(z) +
				'px ' +
				Math.round(k) +
				'px' +
				' rgba(' +
				'0' +
				', ' +
				Math.round(colorFive) +
				', ' +
				Math.round(colorSix) +
				', ' +
				opacity +
				')';
			var a = d + ', ' + v;

			var e = 'translate(' + f + 'px' + ',' + g + 'px' + ')';

			$('.text-area').css({
				transform: e,
				'text-shadow': a,
				color: textColor,
			});
		}, 50);

		// ----------- GLITCH ANIMATION END -------------

		// ----------- TIMER FUNCTIONS ------------
		var a = 3000;
		var b = 0;
		var power = [
			'IGNITE',
			'INSPIRE',
			'MOVE',
			'HELP',
			'CHANGE',
			'BUILD',
			'CHARGE',
			'LEAD',
			'RENEW',
			'IMPROVE',
			'ENCHANT',
			'RISE',
			'CHALLENGE',
			'CREATE',
			'THRILL',
			'SENSE',
			'DISCOVER',
			'AMAZE',
			'',
		];
		var feel = [
			'FREE',
			'STRONG',
			'BRAVE',
			'ADVENTUROUS',
			'CURIOUS',
			'BOLD',
			'BRILLIANT',
			'WARM',
			'LUCKY',
			'VIVID',
			'FANTASTIC',
			'INCREDIBLE',
			'ALIVE',
			'ALIVE',
			'',
		];
		function runWords(i, array) {
			b = Math.random() * 300;
			a = a + b;
			setTimeout(function () {
				$('.text-area').html(array[i]);
			}, a);
		}
		function runRunWords(array) {
			for (i = 0; i < array.length; i++) {
				runWords(i, array);
			}
		}

		// function switchTimeout(){
		// 	setTimeout(
		// 		function(){
		// 			$('.text-area').html("<span class='sentence-text'>MUSIC CAN MAKE YOU FEEL</span>")
		// 		}, 0);
		// 		return Promise(
		// 			(res,rej)=>{
		// 				res();
		// 				rej()
		// 		})
		// }
		// switchTimeout()
		function wordMob() {
			$('.text-area').html(
				"<span class='sentence-text'>MUSIC CAN MAKE YOU FEEL</span>"
			);
		}
		setTimeout(function () {
			$('.text-area').html(
				"<span class='sentence-text'>MUSIC CAN MAKE YOU FEEL</span>"
			);
		}, 0);
		setTimeout(function () {
			runRunWords(feel);
		}, 1500);
		setTimeout(function () {
			$('.text-area-wrap').html("<span class='pulse'></span>");
		}, 9500);
		setTimeout(function () {
			$('.real-text').show();
			$('.cta-bttn').show();
		}, 11500);
		setTimeout(function () {
			$('.real-text:eq(0)').addClass('glitch-mob');
		}, 20000);
		setTimeout(function () {
			$('.real-text:eq(0)').html(
				"BOISE, ID <span class='record-img' description='record; Created by Mauvais Poil'></span> EST. A FEW YEARS AGO"
			);
		}, 20500);
		setTimeout(function () {
			$('.real-text:eq(0)').removeClass('glitch-mob');
		}, 20750);
	}
	if (window.location.href.includes('parties')) {
		animateGlitchTextForPartyPage();
	}
	// SHORTER TIMER FUNCTIONS OVER

	//---------- TIMER FUNCTIONS END

	// ----------- TIMER FUNCTIONS SKIP

	// SKIP COMPLETE

	var colors = ['#364f6b', '#f5f5f5', '#3fc1c9', '#fc5185'];
	function confettiIntro() {
		var end = Date.now() + 1 * 1000;
		console.log('confetti running');

		var index = 0;
		(function frame() {
			for (let i = 0; i < 5; i++) {
				if (index == colors.length) {
					index = 0;
				}
				confetti({
					particleCount: 1,
					startVelocity: 0,
					ticks: 200,
					origin: {
						x: Math.random(),
						// since they fall down, start a bit higher than random
						y: Math.random() - 0.2,
					},
					colors: [colors[index++]],
				});
			}

			if (Date.now() < end) {
				window.requestAnimationFrame(frame);
			}
		})();
	}
	confettiIntro();

	$('a').on('click', function (e) {
		confetti({
			particleCount: 200,
			startVelocity: 130,
		});
	});

	//-------------- EVENT LISTENER FUNCTIONS
	$(document).scroll(function () {
		var scrollpos = $('body').scrollTop();
		var btnpos = $('.cta-bttn').position().top;
		// if (scrollpos + 10 > btnpos){
		// 	$('.nav-bttn').show()
		// }else if(scrollpos + 10 < btnpos){
		// 	$('.nav-bttn').fadeOut()
		//
		// }
		if (scrollpos > 10) {
			$('.nav-row').addClass('nav-row-solid');
		} else if (scrollpos < 10) {
			$('.nav-row').removeClass('nav-row-solid');
		} else {
		}
	});

	// $('.open-bttn').click(function(){
	// 	$('iframe').fadeIn();
	// 	$('.nav-row-close').fadeIn();
	// })
	// $('.close-bttn').click(function(){
	// 	$('iframe').fadeOut();
	// 	$('.nav-row-close').fadeOut();
	// })
	function hoverText(selector, text, bgColor, bgImage) {
		$(selector + ':eq(1)').css({ opacity: '0' });
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
	var events = ['.weddings', '.parties', '.dances', '.special-events'];

	var eventText = [
		'make your wedding a beautiful one.',
		'Make your party rock.',
		'Dance your pants off',
		'special-events',
	];

	var eventColor = [
		'rgba(34, 40, 49, 0.9)',
		'rgba(238,238,238,0.9)',
		'rgba(238,238,238,0.9)',
		'rgba(34, 40, 49, 0.9)',
	];

	var eventImage = [
		'weddings.svg',
		'parties.svg',
		'dances.svg',
		'special-events.svg',
	];

	for (i = 0; i < 4; i++) {
		hoverText(events[i], eventText[i], eventColor[i], eventImage[i]);
	}

	// -------------- EVENT LISTENER FUNCTIONS END
});

var WINDOW = window;
(function () {
	'use strict';

	angular
		.module('cj-mobile-dj', [])
		.config([
			'$compileProvider',
			function ($compileProvider) {
				$compileProvider.aHrefSanitizationWhitelist(
					/^\s*(https?|ftp|mailto|chrome-extension|sms|tel):/
				);
				// Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
			},
		])
		.config([
			'$compileProvider',
			function ($compileProvider) {
				$compileProvider.imgSrcSanitizationWhitelist(
					/^\s*(https?|local|data|chrome-extension):/
				);
			},
		])
		.controller('WeddingsController', function () {
			var wc = this;
			wc.isMobile = isMobile();
			wc.form = false;
			wc.action = false;
			wc.phoneNum = false;
			wc.phoneNumToggle = function () {
				wc.phoneNum = !wc.phoneNum;
			};
			var phone = '1-208-407-0301';
			var message = 'Hey CJ! I need a DJ at my ';
			wc.smsLink = 'sms:' + phone + bodyTag() + encodeURIComponent(message);
			wc.toggleProp = function (prop) {
				if (prop == 'action') {
					return WINDOW.setTimeout(function () {
						WINDOW.location.assign('/form');
					}, 500);
				}
				wc[prop] = !wc[prop];
				console.log('working');
			};
			function bodyTag() {
				return !isIOS() ? '?body=' : !(iOSversion() > 7) ? '&body=' : '&body=';
			}
			function isMobile() {
				return (function (a) {
					var check = false;
					if (
						/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
							a
						) ||
						/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
							a.substr(0, 4)
						)
					) {
						check = true;
					}
					return check;
				})(navigator.userAgent || navigator.vendor || window.opera);
			}
			function isIOS() {
				return /iP(hone|od|ad)/.test(navigator.userAgent);
			}
			function iOSversion() {
				if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
					// supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
					var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
					return [
						parseInt(v[1], 10),
						parseInt(v[2], 10),
						parseInt(v[3] || 0, 10),
					];
				}
			}
		})
		.controller('AnalyticsController', function () {
			var ac = this;
			var category =
				Date.now() < 1488393283769 ? 'Winter Wedding Campaign' : 'General';
			ac.sendEventData = function (object, action) {
				if (window.location.hostname.includes('cjyourdj')) {
					ga('send', 'event', object, action, category);
					console.log('Sending Data...');
				}
				console.log('working');
			};
		});
})();
