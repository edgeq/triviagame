//array for trivia quesstions
//TO DO: pick actual questions

var triviaObject1 = {
	question: "Where is clark kent from?",
	answers: ["Metropolis", "Krypton", "Gotham", "Smallville"],  
	correct: "Krypton"
}

var triviaObject2 = {
	question: "Where is aquaman from?",
	answers: ["The water", "the sea", "space", "thermal vents"],  
	correct: "the sea"
}


var roundTimer = 30;
var intervalId
var postRoundTimer;
var score = 0
var wins = 0

//onclick for StartGame
	$(".start").click(startGame);
//  The runTimer function sets an interval
//  that runs the following decrement function once a second.
function runTimer() {
  intervalId = setInterval(timer, 500);
}

//timer function(s)
function timer() {
 //  Decrease number by one.
  roundTimer--;
  console.log(roundTimer);
  $("#countdown").html("<p><h2>Time left to answer: " + roundTimer);
  
  if (roundTimer === 0) {
    //  ...run the stop function.
    newQuestion();
    //  Alert the user that time is up.
    
    clearInterval(intervalId);
  }
}

//start game
function startGame() {
	console.log("game started")
	runTimer();
	var trivQuestion = $("<div>");
	trivQuestion.addClass("trivia");
	$("#game-area").append(trivQuestion);
	newQuestion();


}


//new question after each round
function newQuestion() {
	 $("#game-area").empty();
	var trivDiv = $("<div>");
	trivDiv.addClass("triv-ans");
	$("#game-area").prepend(trivDiv);

	var screenQuestion = $("#trivia").add("<h2>")
		screenQuestion.text(triviaObject1.question);
		$("#game-area").append(screenQuestion);
		answerChoices();
		 
}

function answerChoices() {
	for (var i = 0; i < triviaObject1.answers.length; i++) {
		var screenAnswer = $("#triv-ans").add("<h2>").attr("class", "bg-info")
			screenAnswer.text(triviaObject1.answers[i]);
			$("#game-area").append(screenAnswer);
		
	}
	
		
}


//reward screen if correct
function rewardScreen() {

}

//stagnant response function
function stagResponse() {
	// roundTimer = 

}
//wrong response function
function wrongResponse() {

}
//end of game
function endGame() {
	//show number of correct answers
	//show number of incorrect answers
	//display option to restart
	//assign startGame() with a click function.
}
//  Execute the run function.
// run();
