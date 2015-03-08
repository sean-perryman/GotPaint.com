// Application.JS - Main Application JavaScript (Overrides Bootstrap stuff)

//Full page slide show
$(function() {
	$('body').vegas({
		slides: [
			{ src: '../gallery/Automobiles/auto1_f.jpg' },
			{ src: '../gallery/Automobiles/auto2_f.jpg' },
			{ src: '../gallery/Automobiles/auto3_f.jpg' },
			{ src: '../gallery/Automobiles/auto4_f.jpg' },
			{ src: '../gallery/Automobiles/auto5_f.jpg' },
		]
	});
});


// Begin Navbar Icon Hover
//About Icon
$('.about-us').mouseenter( function() { 
	$('.navigation-text').text("About Us"); 
});

$('.about-us').mouseout( function() {	
	$('.navigation-text').text("");	
});

//Contact Icon
$('.contact').mouseenter( function() { 
	$('.navigation-text').text("Contact"); 
});

$('.contact').mouseout( function() {	
	$('.navigation-text').text("");	
});

//Events Icon
$('.events').mouseenter( function() { 
	$('.navigation-text').text("Events"); 
});

$('.events').mouseout( function() {	
	$('.navigation-text').text("");	
});

//Home Icon
$('.home').mouseenter( function() { 
	$('.navigation-text').text("Home"); 
});

$('.home').mouseout( function() {	
	$('.navigation-text').text("");	
});

//Gallery Icon
$('.gallery').mouseenter( function() { 
	$('.navigation-text').text("Gallery"); 
});

$('.gallery').mouseout( function() {	
	$('.navigation-text').text("");	
});

//Store Icon
$('.store').mouseenter( function() { 
	$('.navigation-text').text("Store"); 
});

$('.store').mouseout( function() {	
	$('.navigation-text').text("");	
});

//Links Icon
$('.links').mouseenter( function() { 
	$('.navigation-text').text("Links"); 
});

$('.links').mouseout( function() {	
	$('.navigation-text').text("");	
});
//End Navbar Icon Hover