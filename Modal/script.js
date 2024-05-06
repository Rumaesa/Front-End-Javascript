'use strict';

const modal = document.querySelector('.modal');
const buttonCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const buttonOpenModal = document.querySelectorAll('.show-modal');

// buttonOpenModal.addEventListener('click', function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// });

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = function () {
  //   console.log(buttonOpenModal[i].textContent);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < buttonOpenModal.length; i++) {
  buttonOpenModal[i].addEventListener('click', openModel);
}

buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (
    e.key === 'Escape' &&
    !modal.classList.contains('hidden') &&
    !overlay.classList.contains('hidden')
  ) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log('Closing the Modal...');
  }
});
