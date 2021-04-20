'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

// CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //EMPTY SCENARIO
  if (!guess) {
    displayMessage('🚫 No Number');
  }
  // GREATER THAN 20
  if (guess > 20) {
    displayMessage('MORE THAN 20');
    document.querySelector('.guess').value = 20;
    reduceScore();
  }
  // WINNING SCENARIO
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // LOOSING SCENARIO
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too High!' : '⬇️ Too Low!');
      reduceScore();
    } else {
      displayMessage('🔴 You Lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// CODING CHALLENGE #1
// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// FUNCTIONS

// DOM MESSAGE
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const reduceScore = () => {
  score--;
  document.querySelector('.score').textContent = score;
};
