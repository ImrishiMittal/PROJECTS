const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Rome", correct: false },
            { text: "Berlin", correct: false }
        ]
    },
    {
        question: "Which language runs in a web browser?",
        answers: [
            { text: "Java", correct: false },
            { text: "C", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true }
        ]
    }
    // Add more questions as needed
];

const questionContainer = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const resultsEl = document.getElementById('results');
const scoreEl = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextBtn.innerText = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answerButtonsEl.appendChild(button);
    });
}

function resetState() {
    nextBtn.disabled = true;
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

function selectAnswer(button, isCorrect) {
    const buttons = answerButtonsEl.children;
    Array.from(buttons).forEach(btn => {
        const correct = questions[currentQuestionIndex].answers.find(a => a.text === btn.innerText).correct;
        btn.classList.add(correct ? 'correct' : 'wrong');
        btn.disabled = true;
    });

    if (isCorrect) score++;
    userAnswers.push({ 
        question: questions[currentQuestionIndex].question, 
        selected: button.innerText, 
        correct: questions[currentQuestionIndex].answers.find(a => a.correct).text 
    });
    nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultsEl.innerHTML = '';
    userAnswers.forEach((entry, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>Q${index + 1}: ${entry.question}</strong></p>
            <p>Your Answer: <span style="color:${entry.selected === entry.correct ? 'green' : 'red'}">${entry.selected}</span></p>
            <p>Correct Answer: <strong>${entry.correct}</strong></p>
            <hr>
        `;
        resultsEl.appendChild(div);
    });
    scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
    nextBtn.innerText = 'Restart';
    nextBtn.disabled = false;
    nextBtn.addEventListener('click', startQuiz);
}

startQuiz();
