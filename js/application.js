// Application.JS - Main Application JavaScript (Overrides Bootstrap stuff)

//Full page slide show
$(function() {
	$('body').vegas({
		slides: [
			{ src: 'gallery/Automobiles/auto1_f.jpg' },
			{ src: 'gallery/Automobiles/auto2_f.jpg' },
			{ src: 'gallery/Automobiles/auto3_f.jpg' },
			{ src: 'gallery/Automobiles/auto4_f.jpg' },
			{ src: 'gallery/Automobiles/auto5_f.jpg' },
		]
	});
});



if (matchMedia) {
	var mq = window.matchMedia("(min-width: 769px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

var collapsed;

function WidthChange( mq ) {
	if (mq.matches) { //Navbar not collapsed
		console.log( "Navbar expanded" );
		collapsed = false;
		$('.about').mouseenter( function() { if (collapsed) return; $('.about > div:nth-child(1)').show(); }).mouseout( function() { if (collapsed) return; $('.about > div:nth-child(1)').hide(); });
		$('.contact').mouseenter( function() { if (collapsed) return; $('.contact > div:nth-child(1)').show(); }).mouseout( function() { if (collapsed) return; $('.contact > div:nth-child(1)').hide(); });
		$('.events').mouseenter( function() { if (collapsed) return; $('.events > div:nth-child(1)').show(); }).mouseout( function() {	if (collapsed) return; $('.events > div:nth-child(1)').hide(); });
		$('.home').mouseenter( function() { if (collapsed) return; $('.home > div:nth-child(1)').show(); }).mouseout( function() {	if (collapsed) return; $('.home > div:nth-child(1)').hide(); });
		$('.gallery').mouseenter( function() { if (collapsed) return; $('.gallery > div:nth-child(1)').show(); }).mouseout( function() { if (collapsed) return; $('.gallery > div:nth-child(1)').hide(); });
		$('.store').mouseenter( function() { if (collapsed) return; $('.store > div:nth-child(1)').show(); }).mouseout( function() { if (collapsed) return; $('.store > div:nth-child(1)').hide(); });
		$('.links').mouseenter( function() { if (collapsed) return; $('.links > div:nth-child(1)').show(); }).mouseout( function() { if (collapsed) return; $('.links > div:nth-child(1)').hide(); });
	} else { //Navbar collapsed
		console.log( "Navbar collapsed" );
		collapsed = true;
		$('.spade-icon').each( function() {
			$(this).children('navbar-text').show();
		});
	}
}

//Begin Content Placement
$('.spade-icon').on( 'click', function(e) {
	e.preventDefault();

	if ($(this).hasClass('about')) { screenTransition('.about'); }
	if ($(this).hasClass('contact')) { screenTransition('.contact') };
	if ($(this).hasClass('events')) { screenTransition('.events'); }
	if ($(this).hasClass('home')) { screenTransition('.home'); }
	if ($(this).hasClass('gallery')) { screenTransition('.gallery'); }
	if ($(this).hasClass('store')) { screenTransition('.store'); }
	if ($(this).hasClass('links')) { screenTransition('.links'); }
});
//

function screenTransition(newScreen) {
	$('.main').hide();
	$(newScreen).fadeIn();
}