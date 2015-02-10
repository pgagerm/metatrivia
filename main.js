var Question = function (question, answer1, answer2, answer3, answer4) {
	this.question = question;
	this.answer1 = answer1$('<li class="correct">');
	this.answer2 = answer2$('<li class="incorrect">');
	this.answer3 = answer3$('<li class="incorrect">');
	this.answer4 = answer4$('<li class="incorrect">');
};

Question.prototype.mixAnswers = function() {
	var shuffleAnswers = _.shuffle([answer1, answer2, answer3, answer4]);

};

Question.prototype.render = function() {
	this.$el = $('<ul class="current-question">')
		.append();
};




var htmlQuestion1 = new Question();
var htmlQuestion2 = new Question();
var htmlQuestion3 = new Question();
var cssQuestion1 = new Question();
var cssQuestion2 = new Question();
var cssQuestion3 = new Question();
var jsQuestion1 = new Question();
var jsQuestion2 = new Question();
var jsQuestion3 = new Question();
var jQueryQuestion1 = new Question();
var jQueryQuestion2 = new Question();
var jQueryQuestion3 = new Question();
var underscoreQuestion1 = new Question();
var underscoreQuestion2 = new Question();
var underscoreQuestion3 = new Question();




$(document).on('ready', function() {
  
});