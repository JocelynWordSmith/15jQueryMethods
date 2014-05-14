'use strict';

console.log('\'Allo \'Allo!');

$('.description').prepend('<div class="triangle"></div>');




// example 1
$('.button1').click(function() {
	$('.example1').before('<h1>Welcome to :</h1>');
	$('.example1').after('<h4>Thanks for clicking :)</h1>');
});


// example 2
$('.button2').dblclick(function() {
	$('.example2').before('<h1>Welcome to :</h1>');
	$('.example2').after('<h4>Thanks for double clicking :)</h1>');
});

// example 3
$('.button3').click(function() {
	$('.example3').toggle();
});

//example 4
$('.button4').click(function(){
	$('.box1').fadeToggle();
	$('.box2').fadeToggle('slow');
	$('.box3').fadeToggle('fast');
});

//example 5
$('.button5').click(function(){
	$('.contents').slideToggle('slow');
});

//example 6
$('.button6').click(function(){
	$('.slide-box').animate({left:'250px'});
});

//example 7
$('.button7').click(function(){
	$('.example7').append('<br>You wrote: ' + $('.test').val());
});

//example 8
$('.button8').click(function(){
	$('.example8').html('<b>Harumph!</b>');
});

//example 9
$('.button9').click(function(){
	$('p').remove('.italic');
});

//example 10
$('.button10').click(function(){
	$('.tog-box').toggleClass('slide-box');
});

//example 11
$('.button11').click(function(){
	$('.css-box').css({'background-color':'yellow'});

});

//example 12
$('.button12').click(function(){
	$('.size-box').width(150).height(150);

});

//example 13
$('.button13').click(function(){
	$('.box5').siblings().css({'background-color':'green'});
});

//example 14
$('.button14').click(function(){
	$.get('test.txt', function(data,status){
		$('.example14').append(data + '<br>Status: ' + status);
	});
});

//example 15
(function() {
	var httpRequest;
	document.getElementById('ajaxButton').onclick = function() { makeRequest('test.txt'); };

	function makeRequest(url) {
		if (window.XMLHttpRequest) { // Mozilla, Safari, ...
			httpRequest = new XMLHttpRequest();
    // } else if (window.ActiveXObject) { // IE
    //   try {
    //     httpRequest = new ActiveXObject('Msxml2.XMLHTTP');
    //   } 
    //   catch (e) {
    //     try {
    //       httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
    //     } 
    //   catch (e) {}
	//}
		}

		if (!httpRequest) {
			alert('Giving up :( Cannot create an XMLHTTP instance');
			return false;
		}
		httpRequest.onreadystatechange = alertContents;
		httpRequest.open('GET', url);
		httpRequest.send();
	}

	function alertContents() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				alert(httpRequest.responseText);
			} else {
				alert('There was a problem with the request.');
			}
		}
	}
})();
