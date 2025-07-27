let questions = [
    {
        question: "Which of the following is the correct syntax to print something in the console in JavaScript?",
        correctAnswer: "console.log(\"Hello World\")",
        otherAnswers: ["print(\"Hello World\")", "echo(\"Hello World\")", "write.console(\"Hello World\")"]
    },
    {
        question: "What is the type of NaN in JavaScript?",
        correctAnswer: "Number",
        otherAnswers: ["String", "Undefined", "Object"]
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        correctAnswer: "const",
        otherAnswers: ["var", "let", "constant"]
    },
    {
        question: "What is the correct syntax to declare a variable in JavaScript?",
        correctAnswer: "let myVariable;",
        otherAnswers: ["let = myVariable;", "let int myVariable;", "let myVariable()"]
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        correctAnswer: "Float",
        otherAnswers: ["Boolean", "Undefined", "String"]
    },
    {
        question: "What does the === operator do in JavaScript?",
        correctAnswer: "Compares both value and type",
        otherAnswers: ["Assigns a value", "Compares only value", "Converts value to same type then compares"]
    },
    {
        question: "Which function converts a string to an integer in JavaScript?",
        correctAnswer: "parseInt()",
        otherAnswers: ["toInteger()", "Number()", "int()"]
    },
    {
        question: "Which of the following is used to define a block of code in JavaScript?",
        correctAnswer: "Curly braces { }",
        otherAnswers: ["Square brackets [ ]", "Parentheses ( )", "Angle brackets < >"]
    },
    {
        question: "How do you create a function in JavaScript?",
        correctAnswer: "function myFunc() { }",
        otherAnswers: ["function = myFunc()", "def myFunc() { }", "create function myFunc() { }"]
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        correctAnswer: "push()",
        otherAnswers: ["add()", "insert()", "append()"]
    }
];

function setQuestion(questionIndex){
    questionElement.innerText = questions[questionIndex].question;
    let allAnswers = questions[questionIndex].otherAnswers;
    allAnswers.push(questions[questionIndex].correctAnswer);
    console.log(allAnswers);
    for (let i = 0; i < allAnswers.length; i++) {
        let answerBox = document.createElement("div");
        answerBox.classList.add("answer");
        answerBox.innerText = allAnswers[i]
        answersContainer.appendChild(answerBox);
    }
}

let questionElement = document.getElementById("question");
let answersContainer = document.getElementById("answersContainer");
setQuestion(0);