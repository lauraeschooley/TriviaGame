$(document).ready(function () {
//empty var we are going to input the questions into? Unsure how to do this
var DeadpoolQuestions;

//setting starting scores and how the time is going to be counted.
var correctAnswers = 0;
var questionsAnswered = 0;
var timeInSeconds;
var timer;
//array of my questions/anwers/right answer/image for quiz/ I couldnt figure out next steps such as connecting them to functions and having them appear on the screen
var questions = [
	{
		questionText: "Which actor plays the title role in the feature film Deadpool?",
		answers: ["T.J Miller", "Ed Skrein", "Ryan Reynolds", "Morena Baccarin"],
		correctAnswer: "Ryan Reynolds",
		image: "assets/images/ryan.jpg"
	},
	{
		questionText: "When did the character Deadpool first appear in Marvel Comics?",
        answers: ["1997", "1988", "1990", "1992"],
		correctAnswer: "1990",
		image: "assets/images/comic.jpg"
	},
	{
		questionText: "In the movie Deadpool, what is the title character's real name?",
		answers: ["Wade Watson", "Will Wilson", "Wade Wilson", "Wolverine"],
		correctAnswer: "Wade Wilson",
		image: "assets/images/wade.jpg"
	},
	{
		questionText: "Which movie studio released the film Deadpool?",
		answers: ["Columbia Pictures", "20th Century Fox", "Paramount Picture", "Walt Disney Productions"],
		correctAnswer: "20th Century Fox",
		image: "assets/images/marvel-studios-fox.jpg"
	},
	{
		questionText: "Which character is the primary villain in the movie Deadpool?",
        answers: ["Stryker", "Ajax", "Magneta", "firefist", "Ajax"],
		correctAnswer: "Ajax",
		image: "assets/images/ajax.jpg"
	},
	{
		questionText: "What does Deadpool call Professor Xavier's estate?",
		answers: ["Mutant Mansion", "Neverland Mansion", "Bat Cave", "The Exceptional Estate"],
		correctAnswer: "Neverland Mansion",
		image: "assets/images/mansion.jpg"
	},
	{
		questionText: "Who says, Okay guys, I only have 12 bullets, so you're all going to have to share?",
		answers: ["Colossus", "Ajax", "Deadpool", "David"],
		correctAnswer: "Deadpool",
		image: "assets/images/deadpool.jpg"
	},
	{
		questionText: "What's the name of the blind Deadpool character who is Wade Wilson's roommate?",
		answers: ["Blind Jo", "Blind Pat", "Blind Al", "Blind Jarvis"],
		correctAnswer: "Blind Al",
		image: "assets/images/blindal.jpg"
	},
	{
		questionText: "What's the name of the character who recruits Wade to the Weapon X program?",
		answers: ["Warlord", "Angel Dust", "He isnt mentioned by name", "David"],
		correctAnswer: "He isnt named",
		image: "assets/images/jared.jpg"
	},
	{
		questionText: "What's the name of the bar where the Deadpool character Wade Wilson meets Weasel?",
		answers: ["Sister Margaret's Home for Wayward Girls", "Danger Room", "Parairie City Saloon", "mercenary missionary mansion"],
		correctAnswer: "Sister Margaret's Home for Wayward Girls",
		image: "assets/images/sister.jpg"
	}

]

$(".answerButton").on("click", function (event){
game.check(event);

console.log("answer button clicked");

})
//function for when the game starts
var game = {
	questionNumber: 0,
	seconds: 30,
	correct: 0,
	incorrect: 0,
	countDown: function () {
		game.seconds--;
		$("#timer").html(game.seconds);
		if (game.seconds === 0) {
			game.answerWrong();

		}
	},
	//my check function to see if the answers match what is selected
	check: function (event) {
		if ($(event.target).text() === questions[game.questionNumber].correctAnswer) {
			this.answerCorrect();

		} else {
			this.answerWrong();
		}

	},

	answerCorrect: function() {
		console.log("Correct!");
		clearInterval(timer);
		game.correct++;
		game.questionResult("Correct!");
		// if (game.questionNumber < 9 ) {
	

		// setTimeout(function(){game.nextQuestion()}, 3000);

		// } else {

		// 	gameResult();
		// };

	},

	answerWrong: function() {
		console.log("You Wrong!");
		clearInterval(timer);
		game.incorrect++;
		game.questionResult("You are wrong!");
		// if (game.questionNumber < 9 ) {
		
		// 	setTimeout(function(){game.nextQuestion()}, 3000);

		// } else {

		// 	gameResult();
		// };
	},

	questionResult: function (result) {
		$("#questionResult").show();
		$("#questionSection").hide();
		$("#answerSection").hide();
		
		var resultText = $("<h2>");
		resultText.text(result);

		var answerText = $("<h2>");
		answerText.text(questions[game.questionNumber].correctAnswer);
		$("#resultText").html(resultText);
		$("#questionAnswer").html(answerText);

		$("#correctAnswerPic").attr("src", questions[game.questionNumber].image);
		console.log(questions[game.questionNumber].image);
		setTimeout(function(){ 
			$("#questionResult").hide();
			if (game.questionNumber < 9 ) {
		
				game.nextQuestion();
	
			} else {
	
				gameResult();
			}; 
		}, 3000);
	},

	nextQuestion: function () {
		game.seconds = 30;
		$("#timer").text(game.seconds);
		timer = setInterval(game.countDown, 1000);
		$("#questionSection").show();
		$("#answerSection").show();
		game.questionNumber++;
		$("#answer1").html(questions[game.questionNumber].answers[0]);
		$("#answer2").html(questions[game.questionNumber].answers[1]);
		$("#answer3").html(questions[game.questionNumber].answers[2]);
		$("#answer4").html(questions[game.questionNumber].answers[3]);
		$("#question").html(questions[game.questionNumber].questionText);

	},

	start: function () {
		$("#startButton").hide();
		$("#gameResult").hide();
		$("#questionSection").show();
		$("#answerSection").show();
		$("#deadpoolResultPic").attr("src", "");;
		$("#timer").text(game.seconds);
		timer = setInterval(game.countDown, 1000);
		$("#answer1").html(questions[game.questionNumber].answers[0]);
		$("#answer2").html(questions[game.questionNumber].answers[1]);
		$("#answer3").html(questions[game.questionNumber].answers[2]);
		$("#answer4").html(questions[game.questionNumber].answers[3]);
		$("#question").html(questions[game.questionNumber].questionText);
		$("#playAgainButton").hide();
	}
}
//start button that doesnt start..because no start game function to achieve this..this is where i got lost..i put it in an object function but again got lost.
$("#startButton").on("click", function () {
	console.log("start button clicked")

	game.start();

});

//end game result function to show stats. 
function gameResult() {
	clearInterval(timer);
	$("#deadpoolResultPic").attr("src", "assets/images/deadpoolbutt.jpg");
	$("#questionResult").hide();
	$("#gameResult").show();
	$("questionSection").hide();
	$("#answerSection").hide();
	$("#gameStats").html("Game Over! You answered " + game.correct + " out of 10 correct!");
	$("#playAgainButton").show();
}
//play again button that is suppose to reset the game with the values below but couldnt figure out the start game function to actually ahieve that
$("#playAgainButton").on("click", function () {
	game.questionNumber = 0;
	game.seconds = 30;
	game.correct =0;
	game.incorrect = 0;

	questionsAnswered = 0;
	correctAnswers = 0;

	game.start()
});

});

//i want to work on this and get it regraded. I got extremely stuck on how to connect everything together and what exactly is all needed. I think i have more variables than i need and i just cant figure that part out and how to connect everything quite yet. 