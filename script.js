/*jshint esversion: 7 */
/*jshint -W097 */
// 'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // defining secret number to guess
let score = 20; // starting score is defined tot 20
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // placing event on the "CHECK" button

  // defining the value of the entered number
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // display error message if the input is empty
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    // display a success message if the input has the same value as a secret number
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber; // to display secret number in the number area
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30em';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    if (score > 1) {
      // informing if the value is higher then secret number + reducing score  and defining the message when the game is lost
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0; // score is 0
    }
  }
});

// press "AGAIN" button and refresh values
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
