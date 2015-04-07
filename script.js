var answer = Math.floor(Math.random()*100+1);
var guess = 0;
var guesses = [];
var counter = 0

$(document).ready(function(){
//accept ans by click submit
	$('#submit').on('click', function(){
		guess = $(".inputs").val();
		counter ++
		
	//change design for winner
			if (guess === answer) {
				//<form id='win'>
			}

	//check for repeat
			else if (guesses.indexOf(guess) !== undefined){
				//<form id='start'>
			}

	//return cold
			else if (guess < answer) {
				//<form id='cold'>
			}

	//return hot
			else if (guess > answer) {
				//<form id='hot'>
			}
	
	//limit inputs
			if(guesses.length>5){
				//<form id='end'>
			}
	//display guess

	});

//reset button
	$('#reset').on('click', function(){
		//<forsm id='start'>
		answer = Math.floor(Math.random()*100+1);
		guess = 0;
		guesses = [];
		counter = 0;
	});

//hint button
	$('#hint').on('click', function(){
		alert(answer);
	});

//compare guess hotter or colder

});







