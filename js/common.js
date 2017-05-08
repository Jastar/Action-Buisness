$(document).ready(function(){
    $('section#ourmission button.more1').click(function(){
    	$('section#ourmission p.hiddenp1').slideToggle('slow');
    });
    $('section#ourmission button.more2').click(function(){
    	$('section#ourmission p.hiddenp2').slideToggle('slow');
    });
    $('section#ourmission button.more3').click(function(){
    	$('section#ourmission p.hiddenp3').slideToggle('slow');
    });
    $('section#ourmission button.more4').click(function(){
    	$('section#ourmission p.hiddenp4').slideToggle('slow');
    });
    $('section#ourmission button.more5').click(function(){
    	$('section#ourmission p.hiddenp5').slideToggle('slow');
    });
    $('section#ourmission button.more6').click(function(){
    	$('section#ourmission p.hiddenp6').slideToggle('slow');
    });


    $("footer button.showTestimonials").click(function(){
    	$("footer div.testimonials p.responses").slideToggle();
    });
});