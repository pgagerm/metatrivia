// ========================================
// STORE QUESTIONS AND ANSWERS IN AN ARRAY
// ========================================

var TriviaQuestions = [
    {
    question : "Which is correct?",
    answers  : [
        {text    : "!DOCTYPE html",
        isAnswer : true},
        {text    : "DOCTYPE! html",
        isAnswer : false},
        {text    : "DOCTYPE! html!",
        isAnswer : false},
        {text    : "DOCTYPE html!",
        isAnswer : false}
    ]
    },
    {
    question : "Which HTML tag is not a valid HTML element?",
    answers  : [
        {text    : "html",
        isAnswer : false},
        {text    : "d",
        isAnswer : true},
        {text    : "b",
        isAnswer : false},
        {text    : "form",
        isAnswer : false}
    ]
    },
    {
    question : "What year did Tim Berners-Lee invent HTML?",
    answers  : [
        {text    : "1987",
        isAnswer : false},
        {text    : "1989",
        isAnswer : false},
        {text    : "1991",
        isAnswer : true},
        {text    : "1993",
        isAnswer : false}
    ]
    },
    {
    question : "What does CSS stand for?",
    answers  : [
        {text    : "Crappy Style Sheets",
        isAnswer : false},
        {text    : "Cascading Style Sheets",
        isAnswer : true},
        {text    : "Cascading Strong Styles",
        isAnswer : false},
        {text    : "Create Sweet Styles",
        isAnswer : false}
    ]
    },
    {
    question : "What would you use to set the height of an element?",
    answers  : [
        {text    : "size",
        isAnswer : false},
        {text    : "padding",
        isAnswer : false},
        {text    : "display",
        isAnswer : false},
        {text    : "height",
        isAnswer : true}
    ]
    },
    {
    question : "Which is not a CSS property?",
    answers  : [
        {text    : "z-index",
        isAnswer : false},
        {text    : "clip",
        isAnswer : false},
        {text    : "display",
        isAnswer : false},
        {text    : "shade",
        isAnswer : true}
    ]
    },
    {
    question : "What is JS?",
    answers  : [
        {text    : "Framework",
        isAnswer : false},
        {text    : "Programming language",
        isAnswer : true},
        {text    : "A database",
        isAnswer : false},
        {text    : "A library",
        isAnswer : false}
    ]
    },
    {
    question : "Which operator takes precedence over the others?",
    answers  : [
        {text    : "+",
        isAnswer : false},
        {text    : "-",
        isAnswer : false},
        {text    : "*",
        isAnswer : true},
        {text    : "They are evaluated from left to right.",
        isAnswer : false}
    ]
    },
    {
    question : "Which of these is a JS data type?",
    answers  : [
        {text    : "String",
        isAnswer : false},
        {text    : "Number",
        isAnswer : false},
        {text    : "Boolean",
        isAnswer : false},
        {text    : "They are all data types.",
        isAnswer : true}
    ]
    },
    {
    question : "What is jQuery?",
    answers  : [
        {text    : "A framework",
        isAnswer : false},
        {text    : "A platform",
        isAnswer : false},
        {text    : "A database",
        isAnswer : false},
        {text    : "A library",
        isAnswer : true}
    ]
    },
    {
    question : "Which event handler is not valid jQuery syntax?",
    answers  : [
        {text    : "hoverover",
        isAnswer : true},
        {text    : "mouseenter",
        isAnswer : false},
        {text    : "dblclick",
        isAnswer : false},
        {text    : "focus",
        isAnswer : false}
    ]
    },
    {
    question : "Will jQuery work in all browsers?",
    answers  : [
        {text    : "Yes",
        isAnswer : true},
        {text    : "No",
        isAnswer : false},
        {text    : "Quite possibly",
        isAnswer : false},
        {text    : "Only on Margherita Mondays",
        isAnswer : false}
    ]
    },
    {
    question : "What is underscore?",
    answers  : [
        {text    : "A framework",
        isAnswer : false},
        {text    : "A platform",
        isAnswer : false},
        {text    : "A database",
        isAnswer : false},
        {text    : "A library",
        isAnswer : true}
    ]
    },
    {
    question : "Underscore boils down to ________.",
    answers  : [
        {text    : "find, invoke, filter",
        isAnswer : false},
        {text    : "bind, sort, invoke",
        isAnswer : false},
        {text    : "map, filter, reduce",
        isAnswer : true},
        {text    : "sort, find, shuffle",
        isAnswer : false}
    ]
    },
    {
    question : "What is Arnold's famous line from The Terminator?",
    answers  : [
        {text    : "Get to da choppa!",
        isAnswer : false},
        {text    : "It's not a tumor.",
        isAnswer : false},
        {text    : "Go ahead, make my day.",
        isAnswer : false},
        {text    : "I'll be back.",
        isAnswer : true}
    ]
    }
];


var getQuestion = function (index) {
    $(".question").html('');
    $(".answers").html('');

    $(".question").html(TriviaQuestions[index].question);
    for (var i = 0; i < TriviaQuestions[index].answers.length; i++) {
        $(".answers").append('<button id="' + index + '-' + i + '" class="btn btn-primary btn-lg answer">' + (TriviaQuestions[index].answers[i].text) + '</button>');
    }

    $(".nextquestion").attr('id',index);
};


$(".answers").on("click", function (e) {
    var questionIndex = Number(e.target.id.split('-')[0]);
    var answerIndex = Number(e.target.id.split('-')[1]);
    if (e.target.id != "") {
        if (TriviaQuestions[questionIndex].answers[answerIndex].isAnswer) {
            $(".message").html("<h1 style='color: green; font-weight: bold; text-align: center;'>CORRECT!</h1>");
        } else {
            $(".message").html("<h1 style='color: red; font-weight: bold; text-align: center;'>WRONG!</h1>");
        }
        $(".message").show();
        $(".answers").hide();
        $(".nextquestion").show();
    }
});

$(".nextquestion").on("click", function (e) {
    var indexCounter = Number(e.target.id) + 1;

    if (indexCounter >= TriviaQuestions.length) {
        $(".message").html("<h1 style='font-weight: bold; text-align: center;'>No more questions!</h1>");
        $(".question").hide();
        $(".nextquestion").hide();
    } else {
        getQuestion(indexCounter);
        $(".message").hide();
        $(".answers").show();
        $(".nextquestion").hide();
    }
});

getQuestion(0);



//var TriviaQuestions = [
// {
//     question : "Which is correct?",
//     answers  : [
//         {text : "<!DOCTYPE html>", isAnswer : true},
//         {text : "<DOCTYPE! html>", isAnswer : false},
//         {text : "<DOCTYPE! html!>", isAnswer : false},
//         {text : "<DOCTYPE html!>", isAnswer : false}
//     ]
// },
// {
//     question : "Which HTML tag is not a valid HTML element?",
//     answers  : [
//         {text : "<html>", isAnswer : false},
//         {text : "<d>", isAnswer : true},
//         {text : "<b>", isAnswer : false},
//         {text : "<form>", isAnswer : false}
//     ]
// },
// {
//     question : "What is your favorite color?",
//     answers  : [
//         {text : "blue", isAnswer : false},
//         {text : "green", isAnswer : true},
//         {text : "red", isAnswer : false},
//         {text : "yellow", isAnswer : false}
//     ]
// }];
