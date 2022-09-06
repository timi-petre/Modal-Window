'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCLoseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCLoseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//keyboard events
//e pentrutot documentul👇🏻
document.addEventListener('keydown', function (e) {
  //pasam un parametru e(event), ca apoi sa stim ce tasta am apasat
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //if modal does not contain that hidden class, then...
    closeModal();
  }
});
