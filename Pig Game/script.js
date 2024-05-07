'use strict';

// Selecting Elements:
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

// Sating Conditions:
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl1.classList.toggle('player--active');
  playerEl0.classList.toggle('player--active');
};

// Rolling the Dice and Generating a number:
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //   Check for rolled 1:
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      // switch to next player.
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.remove('player--active');
      // playerEl1.classList.toggle('player--active');
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.add('player--active');
      // playerEl0.classList.toggle('player--active');
      switchPlayer();
    }
  }

  //   if (score[0] >= 100 || score[1] >= 100) {
  //     score[0] >= 100
  //       ? (scoreEl0.textContent = 'Winner')
  //       : (scoreEl0.textContent = 'Oops');
  //   }
});

// Holding Score:
btnHold.addEventListener('click', function () {
  if (playing) {
    console.log(currentScore);
    score[activePlayer] = score[activePlayer] + currentScore;
    //   currentScore = 0;
    activePlayer === 0
      ? (scoreEl0.textContent = score[activePlayer])
      : (scoreEl1.textContent = score[activePlayer]);
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
  //   activePlayer = activePlayer === 0 ? 1 : 0;
  //   playerEl1.classList.toggle('player--active');
  //   playerEl0.classList.toggle('player--active');
  console.log(score);
});

btnNew.addEventListener('click', function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');

  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
});
