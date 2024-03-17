const btnOpen = document.querySelector('.block-application__submit');
const modal = document.querySelector('.popup-application');
const btnClose = document.querySelector('.close');

btnOpen.addEventListener('click', () => {
  modal.classList.add('active');
})

btnClose.addEventListener('click', () => {
  modal.classList.remove('active');
})