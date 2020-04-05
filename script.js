const questions = [
    {
    question: "Commonly used data types to NOT include:",
    answers: [
        { text: "Strings", correct: false },
        { text: "Booleans", correct: false },
        { text: "Alerts", correct: true },
        { text: "Numbers", correct: false }
    ]
    },
    {   
    question: "The condition in an if / else statement is enclosed with____.",
    answers: [
        { text: "Quotes", correct: false },
        { text: "Curly brackets", correct: true },
        { text: "Parenthesis", correct: false },
        { text: "Square brackets", correct: false }
    ]
    },   
    {   
    question: "Arrays in JavaScript can be used to store _____:",
    answers: [
        { text: "Numbers and strings", correct: false },
        { text: "Other arrays", correct: false },
        { text: "Booleans", correct: true },
        { text: "All of the above", correct: false }
    ]
    },
    {   
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: [
        { text: "Commas", correct: false },
        { text: "Curly brackets", correct: false },
        { text: "Quotes", correct: true },
        { text: "Parenthesis", correct: false }
    ]
    },
    {   
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        { text: "JavaScript", correct: false },
        { text: "Terminal/bash", correct: false },
        { text: "For loop", correct: false },
        { text: "Console.log", correct: true }
    ]
    }     
    
]

const startButton = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const questionsContainer = document.getElementById('question-container');
const questionsEl = document.getElementById('question')
const answerButton = document.getElementById('choices')

let score = 0 
let randomQuestions 
let setQuestions = 0
let time = 60

startButton.addEventListener('click', startQuiz)

// // start quiz
//  var t = 75;
//  var counter = 0;
//  console.log(t);
//  t--;

function timer () {
    
    let interval = setInterval(function (){
        document.querySelector('#time').innerHTML = time
        if (time <= 60){
            time -= 1
        } else {
            clearInterval(interval);
            highscores()
        }
    }, 1000)
}

function startQuiz() {
    //resetAnswers ();
    console.log("started")
    startButton.remove()
    startScreen.remove()
    randomQuestions = questions.sort(() => Math.random() -.5)
    questionsContainer.classList.remove('hide');
    generateQuestion();
}

function generateQuestion() {
    nextQuestion (randomQuestions[setQuestions]);
    setQuestions++
    if (setQuestions == 1) {
        timer()
    }
}



function nextQuestion (question) {

    //random index but 0,1,2,3 only these 4 numbers are genrated 
    let array = []
    while (array.length < 4){
        let randoNumber = Math.floor(Math.random() * 4)
        if (array.includes(randoNumber) == false) {
            console.log(!(randoNumber in array),randoNumber)
            array.push(randoNumber)
        }
    }
    console.log(array)

    
    document.querySelector("#question").textContent = question.question;
    // text for buttons
    document.querySelector(".btn1").textContent = "1. " + question.answers[array[0]].text
    document.querySelector(".btn2").textContent = "2. " + question.answers[array[1]].text
    document.querySelector(".btn3").textContent = "3. " + question.answers[array[2]].text
    document.querySelector(".btn4").textContent = "4. " + question.answers[array[3]].text


    //event listeners
    document.querySelector(`.btn1`).addEventListener("click", function(){
            console.log(question.answers[0].text)
           
            if (question.answers[array[0]].correct) {                
                score+=1;
                success()
            } else {
                failure()
            }

            startQuiz()
        })

        document.querySelector(`.btn2`).addEventListener("click", function(){
            console.log("hi")
            // if (question[1].answer[1].correct) score += 1
            if (question.answers[array[1]].correct) {
                score+=1;

            } else {

            }
            startQuiz()
        })

        document.querySelector(`.btn3`).addEventListener("click", function(){
            console.log("hi")
            if (question.answers[array[2]].correct) {
                score+=1;

            } else {

            }
            startQuiz()
        })

        document.querySelector(`.btn4`).addEventListener("click", function(){
            console.log("hi")
            if (question.answers[array[3]].correct) {
                score+=1;

            } else {

            }
            startQuiz()
        })
    

}

function success () {
    var pTag =createElement("p")
    pTag.textContent = "You got it bro"
    document.querySelector("body").appendChild(pTag)
    setTimeout(6000)
}

function failure () {

}



function highscores () {

}