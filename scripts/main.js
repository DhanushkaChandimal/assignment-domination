let questionPool = [
    {
        question: "Which of the following is the correct syntax to print something in the console in JavaScript?",
        answers: [
            { answer: "console.log(\"Hello World\")", isCorrect: true },
            { answer: "print(\"Hello World\")", isCorrect: false },
            { answer: "echo(\"Hello World\")", isCorrect: false },
            { answer: "write.console(\"Hello World\")", isCorrect: false }
        ]
    },
    {
        question: "What is the type of NaN in JavaScript?",
        answers: [
            { answer: "Number", isCorrect: true },
            { answer: "String", isCorrect: false },
            { answer: "Undefined", isCorrect: false },
            { answer: "Object", isCorrect: false }
        ]
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        answers: [
            { answer: "const", isCorrect: true },
            { answer: "var", isCorrect: false },
            { answer: "let", isCorrect: false },
            { answer: "constant", isCorrect: false }
        ]
    },
    {
        question: "What is the correct syntax to declare a variable in JavaScript?",
        answers: [
            { answer: "let myVariable;", isCorrect: true },
            { answer: "let = myVariable;", isCorrect: false },
            { answer: "let int myVariable;", isCorrect: false },
            { answer: "let myVariable()", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [
            { answer: "Float", isCorrect: true },
            { answer: "Boolean", isCorrect: false },
            { answer: "Undefined", isCorrect: false },
            { answer: "String", isCorrect: false }
        ]
    },
    {
        question: "What does the === operator do in JavaScript?",
        answers: [
            { answer: "Compares both value and type", isCorrect: true },
            { answer: "Assigns a value", isCorrect: false },
            { answer: "Compares only value", isCorrect: false },
            { answer: "Converts value to same type then compares", isCorrect: false }
        ]
    },
    {
        question: "Which function converts a string to an integer in JavaScript?",
        answers: [
            { answer: "parseInt()", isCorrect: true },
            { answer: "toInteger()", isCorrect: false },
            { answer: "Number()", isCorrect: false },
            { answer: "int()", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is used to define a block of code in JavaScript?",
        answers: [
            { answer: "Curly braces { }", isCorrect: true },
            { answer: "Square brackets [ ]", isCorrect: false },
            { answer: "Parentheses ( )", isCorrect: false },
            { answer: "Angle brackets < >", isCorrect: false }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { answer: "function myFunc() { }", isCorrect: true },
            { answer: "function = myFunc()", isCorrect: false },
            { answer: "def myFunc() { }", isCorrect: false },
            { answer: "create function myFunc() { }", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        answers: [
            { answer: "push()", isCorrect: true },
            { answer: "add()", isCorrect: false },
            { answer: "insert()", isCorrect: false },
            { answer: "append()", isCorrect: false }
        ]
    }
];

let currentQuestionIndex = 0;
let totalCorrectAnswers = 0;
let numberOfQuestions = 5;

let selectedQuestions;

function setQuestion(){
    questionElement.innerText = "(" + (currentQuestionIndex + 1) + " / " + numberOfQuestions + ") " + selectedQuestions[currentQuestionIndex].question;
    for (let i = 0; i < selectedQuestions[currentQuestionIndex].answers.length; i++) {
        let answerBox = document.createElement("div");
        answerBox.classList.add("answer");
        if(selectedQuestions[currentQuestionIndex].answers[i].isCorrect){
            answerBox.classList.add("correctAnswer");
        }
        answerBox.innerText = selectedQuestions[currentQuestionIndex].answers[i].answer;
        answersContainer.appendChild(answerBox);
    }
}

function evaluateAnswer(selectedAnswerElement){
    allAnswerBoxes.forEach(box => box.classList.add('disabled'));
    btnNextQuestion.disabled = false;
    document.querySelector(".correctAnswer").style.backgroundColor = "green";
    if (selectedAnswerElement.classList.contains("correctAnswer")) {
        totalCorrectAnswers ++;
    }else{
        selectedAnswerElement.style.backgroundColor = "red";
    }

    if (currentQuestionIndex == numberOfQuestions - 1) {
        btnNextQuestion.innerText = "Show Results"
    }
}

function resetAll(){
    answersContainer.innerHTML = "";
    btnNextQuestion.disabled = true;
    setQuestion();
    allAnswerBoxes = document.querySelectorAll(".answer");
    allAnswerBoxes.forEach(ansBox => {
        ansBox.addEventListener('click', function(){
            evaluateAnswer(this);
        });
    });
}

function resetPage(){
    currentQuestionIndex = 0;
    totalCorrectAnswers = 0;
    selectedQuestions = questionPool
        .sort(() => Math.random() - 0.5)
        .slice(0, numberOfQuestions)
        .map(insideQuestion => ({
            question: insideQuestion.question,
            answers: insideQuestion.answers.sort(() => Math.random() - 0.5)
        }));
    resetAll();
    title.innerHTML = "JavaScript Fundamentals Quiz";
    btnNextQuestion.innerHTML = "Next Question";
}

function btnNextQuestionOnClick(){
    if (currentQuestionIndex < numberOfQuestions - 1) {
        currentQuestionIndex ++;
        resetAll();
    }else{
        if (btnNextQuestion.innerText == "Restart Quiz") {
            resetPage();
            return;
        }
        answersContainer.innerHTML = "";
        title.innerHTML = "Your Score: ";
        btnNextQuestion.innerHTML = "Restart Quiz";
        questionElement.innerHTML = totalCorrectAnswers + " out of " + numberOfQuestions;
    }
}

const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answersContainer");
const btnNextQuestion = document.getElementById("btnNextQuestion");
const container = document.getElementById("container");
const title = document.getElementById("title");
let allAnswerBoxes;

resetPage();

btnNextQuestion.addEventListener("click", btnNextQuestionOnClick);
