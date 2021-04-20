'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btsOpenModal = document.querySelectorAll('.show-modal');

// FUNCTIONS

// OPEN MODAL
const openModal = () => {
  console.log('Button Clicked');
  modal.classList.remove('hidden'); //remove class DO NOT ADD "." before class name
  overlay.classList.remove('hidden');
};

// CLOSE MODAL
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btsOpenModal.length; i++) {
  btsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
