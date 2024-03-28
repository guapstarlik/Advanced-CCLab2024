const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const questions = [
    {
        questions: 'You know the joke was funny when?',
        choice1: 'When you are running or stomping or hollering',
        choice2: 'Laugh till you cry',
        choice3: 'Stare blankly',
        answer: 1,
    },
{
    questions: 'It is a morning cleaning day when?',
    choice1:'You can smell the pine sol/fabuloso',
    choice2:'Mom and Dad hand you a broom',
    choice3:' R&B is playing',
    answer: 3,
},
{
    questions: 'If you see a group of people run you?',
    choice1:'Watch curiously',
    choice2:'Run in the same direction as the others',
    choice3:'Call the police',
    answer: 2,
},
{
    questions: 'Your mom was not born__?',
    choice1:'Tomorrow',
    choice2:'On her birthday',
    choice3:'Yesterday',
    answer: 3,
},
{
    questions: 'How long is a minute?',
    choice1:'An amount of time that can range from a few seconds to a few hours',
    choice2:'60 seconds',
    choice3:'A unit of time',
    answer: 1,
},
{
    questions: 'What do you do when you enter the grocery store with your mom?',
    choice1:'Do not play with anything',
    choice2:' Do not touch anything',
    choice3:'All of the Above',
    answer: 3,
},
{
    questions: 'Which is not a black movie ?',
    choice1:'The Truman Show',
    choice2:'Friday',
    choice3:'UP',
    answer: 2,
},
{
    questions: 'Your mom is not___?',
    choice1:'BooBoo the Fool',
    choice2:'Oscar the grouch',
    choice3:'John Cena',
    answer: 1,
},
{
    questions: 'What do you need if you want McDonald?',
    choice1:'Your McDonalds order',
    choice2:'McDonalds money',
    choice3:'A different choice',
    answer: 2,
},
{
    questions: 'A scrub is?',
    choice1:'Something you clean with',
    choice2:'A doctors uniform',
    choice3:'A scrub is a guy that thinks hes fly And is also known as a busta',
    answer: 3,
},
{
    questions: 'If your parents friend has a child what are they to you?',
    choice1:'Cousin',
    choice2:'Someone you know',
    choice3:'Family friend ',
    answer: 1,
},
{
    questions: 'Who claims they had the greatest comeback?',
    choice1:'Tyga',
    choice2:'Soulja Boy',
    choice3:'SZA',
    answer: 2,
}


]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 12;

// Function to start the game with a specified number of questions
function startGame(numQuestions) {
    questionCounter = 0;
    score = 0;
    MAX_QUESTIONS = numQuestions; // Update MAX_QUESTIONS based on the selected mode
    availableQuestions = questions.slice(0, numQuestions);
    getNewQuestion();
}


document.addEventListener("DOMContentLoaded", function() {
    // Add event listener once DOM is fully loaded
    document.getElementById("eightQuestions").addEventListener("click", () => startGame(8));
    document.getElementById("tenQuestions").addEventListener("click", () => startGame(10));
    document.getElementById("twelveQuestions").addEventListener("click", () => startGame(12));
});

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.questions;

    choices.forEach((choice, index) => {
        choice.innerText = currentQuestion[`choice${index + 1}`];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}

startGame();


    