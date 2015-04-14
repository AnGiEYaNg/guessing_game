var answer = Math.floor(Math.random()*100+1);
var guess = 0;
var guesses = [];
var compare="";

$(document).ready(function(){	

//accept ans by click submit
	$('#submit').on('click',function(event){
		guess = $(".input").val();

	//function to compare guess hotter or colder with relative to the last input
var compared=function(guess,guesses){
if(guesses.length<1){return compare;}
else{
	if(guess<guesses[guesses.length-2]&&guesses[guesses.length-2]<answer)
		return compare = "";
	else if (guess>guesses[guesses.length-2]&&guesses[guesses.length-2]>answer)
		return compare ="";
	else if (guess<guesses[guesses.length-2]&&guesses[guesses.length-2]>answer)
		return compare = " getting <span class='cold'>COLDER</span> but"; 
	else if(guess>guesses[guesses.length-2]&&guesses[guesses.length-2]<answer)
		return compare=" getting <span class='hot'>HOTTER</span> but";
	else
		return compare;
}
};

	//check for real number
	if(guess % 1 !== 0||guess>100||guess<1)
		$('#background').text('Please enter a valid whole number from 1-100');
				//alert('invalid number');

	//check for repeat
	else if (guesses.indexOf(guess) >=0){
		$('#background').text('Repeated guess, please re-enter');
				//alert('repeat');
			}
	else {guesses.push(guess);	

	//game won and auto restart
			if (guess == answer) {
				$('#background').html('<div class="win">You have won, enter your guess for the next game!</div>');
				$('form').css({'background-color': '#FFBDFF',
								'border-color':'#AD5CAD'});
				//alert(guesses);
				answer = Math.floor(Math.random()*100+1);
				guess = 0;
				guesses = [];
				compare="";
			}

	//return cold
			else if (guess < answer ) {
				compared(guess,guesses);
				//alert(compare);
				$('#background').html('<p>'+guesses+'</p><p>'+compare+' too <span class="cold">COLD</span> to the answer</p>');
			}

	//return hot
			else if (guess > answer) {
				compared(guess,guesses);
				//alert(compare);
				$('#background').html('<p>'+guesses+'</p><p>'+compare+' too <span class="hot">HOT</span> to the answer</p>');
			}
	}
	//limit inputs to 5 tries
			if(guesses.length>=5 && guess!=answer){
				$("#background").html('<p>'+guesses+'</p><p class="done"> Game Over!<p>');
				answer = Math.floor(Math.random()*100+1);
				guess = 0;
				guesses = [];
				compare="";
			}

	event.preventDefault();
	});


//reset button
	$('#reset').on('click', function(){
		//<forsm id='start'>
		answer = Math.floor(Math.random()*100+1);
		guess = 0;
		guesses = [];
	});

//hint button
	$('#hint').on('click', function(event){
		alert(answer);
		event.preventDefault();
	});
});







