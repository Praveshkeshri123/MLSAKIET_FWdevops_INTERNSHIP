const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Australia", "North America"],
        answer: "Africa"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "Which country has the largest population?",
        options: ["USA", "India", "China", "Brazil"],
        answer: "China"
    },
    {
        question: "if you are hero of the world, what can you choose?",
        options: ["god", "nothing", "money", "girl"],
        answer: "girl"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quizData.forEach((currentQuiz, quizIndex) => {
        const options = currentQuiz.options.map((option) => `
            <label>
                <input type="radio" name="question${quizIndex}" value="${option}">
                ${option}
            </label>
        `).join('');

        quizContainer.innerHTML += `
            <div class="question">
                <h3>${currentQuiz.question}</h3>
                ${options}
            </div>
        `;
    });
}

function getScore() {
    let score = 0;
    quizData.forEach((currentQuiz, quizIndex) => {
        const selectedOption = document.querySelector(`input[name="question${quizIndex}"]:checked`);
        if (selectedOption && selectedOption.value === currentQuiz.answer) {
            score++;
        }
    });
    return score;
}

submitButton.addEventListener('click', () => {
    const score = getScore();
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
});

loadQuiz();
