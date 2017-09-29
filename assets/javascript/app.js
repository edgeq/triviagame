//objects for trivia questions
//TO DO: pick actual questions

var triviaQuestions = [
	{
	question: "Where is clark kent from?",
	answers: ["Metropolis", "Krypton", "Gotham", "Smallville"],  
	correct: "Krypton"
},
	{
	question: "Where is aquaman from?",
	answers: ["The water", "the sea", "space", "thermal vents"],  
	correct: "the sea"
}
]
var currentQuestion = 0

var round1Timer = 30;
var round2Timer = 30
var round3Timer = 30;
var intervalId;
var postRoundTimer;
var score = 0;
var wins = 0;

//onclick for StartGame
$(".start").click(startGame);
//  The runTimer function sets an interval
//  that runs the following decrement function once a second.
function runTimer() {
  round1timer = 30;
  intervalId = setInterval(timer, 500);
}

//timer function(s)
function timer() {
 //  Decrease number by one.
  round1Timer--;
  console.log(round1Timer);
  $("#countdown").html("<h2>Time left to answer: " + round1Timer);
  
  if (round1Timer === 0) {
    clearInterval(intervalId);
    newQuestion();
  }
}

//start game
function startGame() {
	console.log("game started")
	runTimer();
	var trivQuestion = $("<div>");
	$("#game-area").append(trivQuestion);
	newQuestion();


}


//new question after each round
function newQuestion() {
	 console.log("new question")
	 $("#game-area").empty();

	var screenQuestion = $("#trivia").add("<h2>")
		screenQuestion.text(triviaQuestions[currentQuestion].question);
		$("#game-area").append(screenQuestion);
		answerChoices();

	currentQuestion++
		 
}

function answerChoices() {
	for (var i = 0; i < triviaQuestions[currentQuestion].answers.length; i++) {
		var screenAnswer = $("#triv-ans").add("<h2>").attr("class", "bg-info")
			screenAnswer.text(triviaQuestions[currentQuestion].answers[i]);
			$("#game-area").append(screenAnswer);
		
	}	
		
}

//reward screen if correct
function rewardScreen() {

}

function resetTimer() {
	if (round1Timer <= 0){
		round1Timer = 30;
		clearInterval(intervalId);
		
		stagResponse();
}

//stagnant response function
function stagResponse() {
	 console.log("second question")
	 $("#game-area").empty();
	var trivDiv = $("<div>");
	// trivDiv.addClass("triv-ans");
	// $("#game-area").prepend(trivDiv);

	var screenQuestion = $("#trivia").add("<h2>")
		screenQuestion.text(triviaObject2.question);
		$("#game-area").append(screenQuestion);
		answerChoices();
	

		

	}

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
