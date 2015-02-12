// ========================================
// STORE QUESTIONS AND ANSWERS IN AN ARRAY
// ========================================	

var TriviaQuestions = [
	{
	question : "Which is correct?",
	answers  : [
		{text    : "<!DOCTYPE html>",
		isAnswer : true},
		{text    : "<DOCTYPE! html>",
		isAnswer : false},
		{text    : "<DOCTYPE! html!>",
		isAnswer : false},
		{text    : "<DOCTYPE html!>",
		isAnswer : false}
	]
	},
	{
	question : "Which HTML tag is not a valid HTML element?",
	answers  : [
		{text    : "<html>",
		isAnswer : false},
		{text    : "<d>",
		isAnswer : true},
		{text    : "<b>",
		isAnswer : false},
		{text    : "<form>",
		isAnswer : false}
	]
	}];



var getQuestion = function () {
	var indexCounter = 0;
	$(".jumbotron").html(TriviaQuestions[indexCounter].question);
		for (var i = 0; i < TriviaQuestions[indexCounter].answers.length; i++) 
			$(".btn").html(TriviaQuestions[indexCounter].answers[i]);
};

getQuestion();


$(document).on('ready', function() {
	
});