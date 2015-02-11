//Information about a question and it's possible answers//

var Question = function (question, answers) {
	this.question = question;
	this.answers = answers;
};


// ========================================
// RENDER A DOM ELEMENT FOR THE QUESTION
// INSTANCE AND RETURN 
// ========================================	

Question.prototype.render = function() {
	var currentQuestion = $('<div>')
		.append(
			Question.answers.map(function(answer) {
				var a = $('<div>');
				if(answer.isAnswer) {
					a.addClass('correct');
				}
				return a;
			})
		);
};


// ========================================
// CHECKS IF ANSWER IS CORRECT AND ADJUSTS
// RUNNING TOTAL SCORE
// ========================================	

Question.prototype.isCorrect = function() {
	$('<div>').on('click', function() {
		var totalScore = 0;
		if(this.answer.hasClass('correct')) {
			totalScore += 1;
		} 
		return totalScore;
	});
};


// ========================================
// CLEARS OUT DIV AND REPLACES WITH NEXT
// QUESTION
// ========================================	

Question.prototype.removeReplaceQuestion = function() {
	
};


// ========================================
// ARRAYS TO MOVE UNANSWERED AND ANSWERED
// 			   QUESTIONS INTO
// ========================================	

var unansweredQuestions = [];
var answeredQuestions = [];


// ========================================
// 				QUESTIONS
// ========================================			


	var htmlQuestion1 = new Question ("Which is correct?", [
			{text   : "<!DOCTYPE html>",
			isAnswer: true},
			{text   : "<DOCTYPE! html>",
			isAnswer: false},
			{text   : "<DOCTYPE! html!>",
			isAnswer: false},
			{text   : "<DOCTYPE html!>",
			isAnswer: false}
		]);
	var htmlQuestion2 = new Question ("Which HTML tag is not a valid HTML element?", [
			{text   : "<html>",
			isAnswer: false},
			{text   : "<d>",
			isAnswer: true},
			{text   : "<b>",
			isAnswer: false},
			{text   : "<form>",
			isAnswer: false}
		]);
	var htmlQuestion3 = new Question ("What year did Tim Berners-Lee invent HTML?", [
			{text   : "1987",
			isAnswer: false},
			{text   : "1989",
			isAnswer: false},
			{text   : "1991",
			isAnswer: true},
			{text   : "1993",
			isAnswer: false}
		]);
	var cssQuestion1 = new Question ("What does CSS stand for?", [
			{text   : "Crappy Style Sheets",
			isAnswer: false},
			{text   : "Cascading Style Sheets",
			isAnswer: true},
			{text   : "Cascading Strong Styles",
			isAnswer: false},
			{text   : "Create Sweet Styles",
			isAnswer: false}
		]);
	var cssQuestion2 = new Question ("What would you use to set the height of an element?", [
			{text   : "size",
			isAnswer: false},
			{text   : "padding",
			isAnswer: false},
			{text   : "display",
			isAnswer: false},
			{text   : "height",
			isAnswer: true}
		]);
	var cssQuestion3 = new Question ("Which is not a CSS property?", [
			{text   : "z-index",
			isAnswer: false},
			{text   : "clip",
			isAnswer: false},
			{text   : "display",
			isAnswer: false},
			{text   : "shade",
			isAnswer: true}
		]);
	var jsQuestion1 = new Question ("What is JS?", [
			{text   : "Framework",
			isAnswer: false},
			{text   : "Programming language",
			isAnswer: true},
			{text   : "A database",
			isAnswer: false},
			{text   : "A library",
			isAnswer: false}
		]);
	var jsQuestion2 = new Question ("Out of these operators which takes precedence over the others?", [
			{text   : "+",
			isAnswer: false},
			{text   : "-",
			isAnswer: false},
			{text   : "*",
			isAnswer: true},
			{text   : "They are evaluated from left to right.",
			isAnswer: false}
		]);
	var jsQuestion3 = new Question ("Which of these is a JS data type?", [
			{text   : "String",
			isAnswer: false},
			{text   : "Number",
			isAnswer: false},
			{text   : "Boolean",
			isAnswer: false},
			{text   : "They are all data types.",
			isAnswer: true}
		]);
	var jqueryQuestion1 = new Question ("What is jQuery?", [
			{text   : "Framework",
			isAnswer: false},
			{text   : "Platform",
			isAnswer: false},
			{text   : "A database",
			isAnswer: false},
			{text   : "A library",
			isAnswer: true}
		]);
	var jqueryQuestion2 = new Question ("Which event handler is not valid jQuery syntax?", [
			{text   : "hoverover",
			isAnswer: true},
			{text   : "mouseenter",
			isAnswer: false},
			{text   : "dblclick",
			isAnswer: false},
			{text   : "focus",
			isAnswer: false}
		]);
	var jqueryQuestion3 = new Question ("Will jQuery work in all browsers?", [
			{text   : "Yes",
			isAnswer: true},
			{text   : "No",
			isAnswer: false},
			{text   : "Quite possibly",
			isAnswer: false},
			{text   : "Only on Margherita Mondays",
			isAnswer: false}
		]);
	var underscoreQuestion1 = new Question ("What is underscore?", [
			{text   : "Framework",
			isAnswer: false},
			{text   : "Platform",
			isAnswer: false},
			{text   : "A database",
			isAnswer: false},
			{text   : "A library",
			isAnswer: true}
		]);
	var underscoreQuestion2 = new Question ("Underscore boils down to ________.", [
			{text   : "find, invoke, filter",
			isAnswer: false},
			{text   : "bind, sort, invoke",
			isAnswer: false},
			{text   : "map, filter, reduce",
			isAnswer: true},
			{text   : "sort, find, shuffle",
			isAnswer: false}
		]);
	var underscoreQuestion3 = new Question ("What is Arnold's famous line from The Terminator?", [
			{text   : "Get to da choppa!",
			isAnswer: false},
			{text   : "It's not a tumor.",
			isAnswer: false},
			{text   : "Go ahead, make my day.",
			isAnswer: false},
			{text   : "I'll be back.",
			isAnswer: true}
		]);

// ========================================
// 	PUSH NEW QUESTIONS INTO ARRAY
// ========================================	

unansweredQuestions.push(htmlQuestion1);
unansweredQuestions.push(htmlQuestion2);
unansweredQuestions.push(htmlQuestion3);
unansweredQuestions.push(cssQuestion1);
unansweredQuestions.push(cssQuestion2);
unansweredQuestions.push(cssQuestion3);
unansweredQuestions.push(jsQuestion1);
unansweredQuestions.push(jsQuestion2);
unansweredQuestions.push(jsQuestion3);
unansweredQuestions.push(jqueryQuestion1);
unansweredQuestions.push(jqueryQuestion2);
unansweredQuestions.push(jqueryQuestion3);
unansweredQuestions.push(underscoreQuestion1);
unansweredQuestions.push(underscoreQuestion2);
unansweredQuestions.push(underscoreQuestion3);








$(document).on('ready', function() {
  
});