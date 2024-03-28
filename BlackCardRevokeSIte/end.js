const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = document.querySelector('#mostRecentScore'); // Added missing quotation marks

const highScores = JSON.parse(localStorage.getItem('highScores')) || []; // Corrected variable name

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore.innerText; // Corrected property access

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    e.preventDefault(); 

    const score = {
        score: parseInt(mostRecentScore.innerText), // Converted score to integer
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};
