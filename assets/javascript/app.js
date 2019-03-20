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
		answers: ["T.J Miller", "Ed Skrein", "Ryan Reynolds"],
		correctAnswer: "Ryan Reynolds",
		image: "assets\images\ryan.jpg"
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
		questionText: "In the movie Deadpool, the title character crosses the barrier between character and audience. What is the term for this imagined barrier?",
		answers: ["the fourth wall", "the audience barrier", "the character wall", "the fourth barrier"],
		correctAnswer: "the fourth wall",
		image: "assets/images/deadpool_bridge.jpg"
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
		questionText: "Which Deadpool character says, Okay guys, I only have 12 bullets, so you're all going to have to share?",
		answers: ["Colossus", "Ajax", "Deadpool", "David"],
		correctAnswer: "Deadpool",
		image: "assets/images/deadpool.jpg"
	},
	{
		questionText: "What is the name of the blind Deadpool character who is Wade Wilson's roommate?",
		answers: ["Blind Jo", "Blind Pat", "Blind Al", "Blind Jarvis"],
		correctAnswer: "Blind Al",
		image: "assets/images/blindal.jpg"
	},
	{
		questionText: "What is the name of the Deadpool character who recruits Wade to the Weapon X program?",
		answers: ["Warlord", "Angel Dust", "He isnt named", "David"],
		correctAnswer: "He isnt named",
		image: "assets/images/jared.jpg"
	},
	{
		questionText: "What is the name of the bar where the Deadpool character Wade Wilson meets Weasel?",
		answers: ["Sister Margaret's Home for Wayward Girls", "Danger Room", "Parairie City Saloon", "mercenary missionary mansion"],
		correctAnswer: "Sister Margaret's Home for Wayward Girls",
		image: "assets/images/sister.jpg"
	}

]
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
			game.check();

		}
	},
	//my check function to see if the answers match what is selected
	check: function () {
		for (var i = 0; i < questions[i].answers.length;
			i++) {

		}
	},

	start: function () {
		timer = setInterval(game.countDown, 1000);
		$("#answer1").html(questions[game.questionNumber].answers[0]);
		$("#answer2").html(questions[game.questionNumber].answers[1]);
		$("#answer3").html(questions[game.questionNumber].answers[2]);
		$("#question").html(questions[game.questionNumber].questionText);
	}
}
//start button that doesnt start..because no start game function to achieve this..this is where i got lost..i put it in an object function but again got lost.
$("#startButton").on("click", function () {
	console.log("start button clicked")

});

//end game result function to show stats. 
function gameResult() {
	$("#questionResult").hide();
	$("#gameResult").show();
	$("#gameStats").html("Game Over! You answered " + correctAnswers + " out of " + questionsAnswered + " correct!");
}
//play again button that is suppose to reset the game with the values below but couldnt figure out the start game function to actually ahieve that
$("#playAgainButton").on("click", function () {
	questionsAnswered = 0;
	correctAnswers = 0;
});

});

//i want to work on this and get it regraded. I got extremely stuck on how to connect everything together and what exactly is all needed. I think i have more variables than i need and i just cant figure that part out and how to connect everything quite yet. 