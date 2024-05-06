'use strict';
/*
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number...';
console.log(document.querySelector('.message').textContent);
// document.querySelector('.guess').value = 23;
document.querySelector('.score').textContent = 21;
*/

let score = 20;
let highScore = 0;
let generatedNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //   while (!score) {
  if (!guess) {
    // When number is 0:

    console.log('You have not entered any number! Please enter a number.');
    // document.querySelector('.message').textContent = '⛔ No Number...';
    displayMessage('⛔️ No number!');
  } else if (guess > 20) {
    // When the number is greater than 20:
    // document.querySelector('.message').textContent =
    //   '⛔ Enter Between 1 to 20...';
    displayMessage('⛔ Enter Between 1 to 20...');
  } else {
    // When there is a number:
    // document.querySelector('.number').textContent = generatedNumber;
    console.log(generatedNumber);
    if (guess === generatedNumber) {
      // When number is equal:
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = generatedNumber;
      document.querySelector('.number').style.width = '30rem';
      //   document.querySelector('.message').textContent = '🎉 Correct Number...';
      displayMessage('🎉 Correct Number...');
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== generatedNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        displayMessage(
          guess > generatedNumber ? '📈 Too high!' : '📉 Too low!'
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = '💥 You lost the game!';
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
  //     else if (guess > generatedNumber) {
  //       // When number is high:

  //       if (score > 1) {
  //         // document.querySelector('.message').textContent = '📈 Too High...';
  //         displayMessage('📈 Too High...');
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         // document.querySelector('.message').textContent =
  //         //   '🎇 You Lost The Game...';
  //         displayMessage('🎇 You Lost The Game...');
  //         document.querySelector('.score').textContent = 0;
  //       }
  //     } else if (guess < generatedNumber) {
  //       // When number is low
  //       if (score > 1) {
  //         // document.querySelector('.message').textContent = '📉Too Low...';
  //         displayMessage('📉Too Low...');
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         // document.querySelector('.message').textContent =
  //         //   '🎇 You Lost The Game...';
  //         displayMessage('🎇 You Lost The Game...');
  //         document.querySelector('.score').textContent = 0;
  //       }
  //     }
  //   }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  console.log('Again Clicked..');
  generatedNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(generatedNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highScore;
});
