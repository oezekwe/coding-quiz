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

var clock;
var time= 90;
var index=0;
var introPg= document.getElementById("intro");
var queS= document.getElementById("quizSection");
var options= document.getElementById("choices");
var judgement= document.getElementById("judge");
var endPg= document.getElementById("conclusion");
var dispScore= document.getElementById("display_scores");
var finalScore= document.getElementById("total");
var trackTime= document.getElementById("time");
var begin= document.querySelector("#startBtn");
var submitScore= document.getElementById("submit");


function startQuiz(){
    introPg.setAttribute("class", "Remove");
    queS.removeAttribute("class");
    clock= setInterval(timer, 1000);
    trackTime.innerText= time;
    displayQuestion();
}
function displayQuestion(){
    var initialProblem= questions[index];
    document.getElementById("print_question").innerText= initialProblem.que;
    options.innerHTML= "";
    for(let x=0; x<initialProblem.choices.length; x++){
        let quizNode= document.createElement("button");
        quizNode.setAttribute("value", initialProblem.choices[x]);
        quizNode.textContent= `${initialProblem.choices[x]}`;
        quizNode.onclick= checkAnswer;
        options.appendChild(quizNode);
    }
}

function checkAnswer(){
    if(this.value == questions[index].answer){
        judgement.innerText= "Correct";
    }
    else{
        time-=15;
        if(time<0){
            time= 0;
        }
        trackTime.innerText= time;
        judgement.innerText= "Wrong";
    }
    //debugger;
    judgement.setAttribute("class", "judge");
    setTimeout(function(){
        judgement.setAttribute("class","Remove")}, 3000);

    if(++index == questions.length){
        endGame();
    }
    else{
        displayQuestion();
    }
}

function endGame(){
    clearInterval(clock);
    endPg.removeAttribute("class");
    queS.setAttribute("class", "Remove");
    finalScore.innerText= time;
}

function saveScore(){
    var charsInput= document.getElementById("initials").value;
    if(charsInput != " "){
        var scores= JSON.parse(localStorage.getItem("score")) || [];

        var inputScore= {score: time, initials: charsInput};
        scores.push(inputScore);
        localStorage.setItem("score", JSON.stringify(scores));
    }
    loadScore();
}

function loadScore(){
    endPg.setAttribute("class", "Remove");
    dispScore.removeAttribute("class");
    var savedScores= localStorage.getItem("score");
    savedScores= JSON.parse(savedScores);
    debugger;
    for(let y=0; y<savedScores.length; y++){
        console.log(savedScores[y].score);
        let insertScoreEl= document.createElement("li");
        let insertScoreNode= document.createTextNode(savedScores[y].initials + "- " + savedScores[y].score);
        insertScoreEl.appendChild(insertScoreNode);
        dispScore.appendChild(insertScoreEl);
    }
}

function timer(){
    time--;
    trackTime.innerText= time;
    if(time<=0){
        endGame();
    }
}
begin.addEventListener("click", startQuiz);
submitScore.onclick= saveScore;