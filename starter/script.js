'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';
let scretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No Number');
  } else if (guess == scretnumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = scretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != scretnumber) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   guess > scretnumber ? '📉 Too high!' : '📉 Too low!';
      displayMessage(guess > scretnumber ? '📉 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    // document.querySelector('.message').textContent = 'you lost the game!';
    displayMessage('you lost the game!');
  }
  //    else if (guess < scretnumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game!';
  //     }
  //   } else if (guess > scretnumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = '📉 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game!';
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  scretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = {};
  // document.querySelector('.message').textContent = 'Start guessing..';
  displayMessage('Start guessing..');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.with = '15rem';
});
