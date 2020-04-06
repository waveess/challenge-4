// questions 
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
        { text: "Booleans", correct: false },
        { text: "All of the above", correct: true}
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
const endScreen = document.getElementById('end-screen')

let score = 0 
let randomQuestions 
let setQuestions = 0

startButton.addEventListener('click', startQuiz)

// start timer
var count = document.querySelector("#time");
    function timer () {
        count.textContent = 60;
        var timer = setInterval(function() {
            if(count.textContent > 0) {
                count.textContent -= 1 }
                else {clearInterval(timer);}
            }
            , 2000)
        }
    


// start quiz 
function startQuiz(timer) {
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
    if (setQuestions <= 4) {
        timer()
    } else (setQuestions = 0) [
        endQuiz()
    ]
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
   
    
var score = "1";
    //event listeners
    document.querySelector(`.btn1`).addEventListener("click", function(){
            console.log(question.answers[0].text)
           
            // if (question[1].answer[1].correct) score += 1
            if (question.answers[array[0]].correct) {                
                score;
                success()
            } else {
                failure()
            }

            startQuiz()
        })

    document.querySelector(`.btn2`).addEventListener("click", function(){
            console.log(question.answers[1].text)
            
            if (question.answers[array[1]].correct) {
                score+=1;
                success()
            } else {
                failure()
            }

            startQuiz()
           
        })

    document.querySelector(`.btn3`).addEventListener("click", function(){
            console.log(question.answers[2].text)

            if (question.answers[array[2]].correct) {
                score+=1;
                success()
            } else {
                failure()
            }

            startQuiz()
           
        })

    document.querySelector(`.btn4`).addEventListener("click", function(){
            console.log(question.answers[3].text)
            if (question.answers[array[3]].correct) {
                score+=1;
                success()
            } else {
                failure()
            }

            startQuiz()
        
        })
    

}

function success () {
    var correct = document.createElement("p")
    correct.textContent = "Correct!"
    document.querySelector("#choices").appendChild(correct)
    setTimeout(correct, 2000);
    
    
}

function failure () {
    var wrong = document.createElement("p")
    wrong.textContent = "Wrong!"  
    document.querySelector("#choices").appendChild(wrong)
    if (wrong.textContent = "Wrong!") {
        timer -= 10
    }
}



function highscores () {
    document.querySelector('.scores').innerHTML = highscores
}

function endQuiz () {
    startButton.remove()
    startScreen.remove()
    questionsContainer.remove()
    endScreen.classList.remove('hide');
    
}
