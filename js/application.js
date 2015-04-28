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
		
		//Reset spade-icon text
		collapsed = false;
		$('.spade-icon').each( function() {
			$(this).css( "color", "rgba(100,100,100,0)");
		});

		$('#nav-about-link').mouseenter( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,1)");	}).mouseout( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,0)"); });
		$('#nav-contact-link').mouseenter( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,1)");	}).mouseout( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,0)"); });
		$('#nav-events-link').mouseenter( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,1)");	}).mouseout( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,0)"); });
		$('#nav-home-link').mouseenter( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,1)");	}).mouseout( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,0)"); });
		$('#nav-gallery-link').mouseenter( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,1)");	}).mouseout( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,0)"); });
		$('#nav-store-link').mouseenter( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,1)");	}).mouseout( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,0)"); });
		$('#nav-links-link').mouseenter( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,1)");	}).mouseout( function() { if (collapsed) return; $(this).css( "color", "rgba(100,100,100,0)"); });		

	} else { //Navbar collapsed
		console.log( "Navbar collapsed" );
		collapsed = true;
		$('.spade-icon').each( function() {
			$(this).css( "color", "rgba(100,100,100,1)");
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


