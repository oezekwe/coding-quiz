var questions= [{
    que: "Commonly used data types do not include: ",
    choices: ["strings","booleans","alerts","numbers"],
    answer: "alerts"
},
{
    que: "The condition in an if/else statement is enclosed with_____.",
    choices: ["quotes","curly brackets","parenthesis","square brackets"],
    answer: "parenthesis"
},
{
    que: "Arrays in JavaScript can be used to store _____.",
    choices: ["numbers and strings","other arrays","booleans","all of the above"],
    answer: "all of the above"
},
{
    que: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commmas","curly brackets","quotes","parenthesis"],
    answer:"quotes"
},
{
    que: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript","terminal/bash","for loops","console.log"],
    answer: "console.log"
}
];

var index=0;
var introPg= document.getElementById("intro");
var queS= document.getElementById("quizSection");
var options= document.getElementById("choices");
var endPg= document.getElementById("conclusion");
var timer= document.getElementById("time");
var begin= document.querySelector("#startBtn");


function startQuiz(){
    introPg.setAttribute("class", "Remove");
    queS.removeAttribute("class");
    displayQuestion();
}
function displayQuestion(){
    var initialProblem= questions[index];
    document.getElementById("print_question").innerText= initialProblem.que;
    options.innerHTML= "";
    for(let x=0; x<initialProblem.choices.length; x++){
        var quizNode= document.createElement("button");
        quizNode.setAttribute("value", initialProblem.choices[x]);
        quizNode.textContent= `${initialProblem.choices[x]}`;
        quizNode.onclick= checkAnswer;
        options.appendChild(quizNode);
    }
}

function checkAnswer(){
    if(this.value == questions[index].answer){
        console.log("Correct");
    }
    else{
        console.log("Wrong");
    }

    if(++index == questions.length){
        endGame();
    }
    else{
        displayQuestion();
    }
}

function endGame(){
    document.getElementById("conclusion").removeAttribute("class");
    queS.setAttribute("class", "Remove");
}
begin.addEventListener("click", startQuiz);