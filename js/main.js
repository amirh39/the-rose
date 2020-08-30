const selectElement = (element) => document.querySelector(element);

const header = selectElement('header');
const menuToggler = selectElement('.nav__toggle');

menuToggler.addEventListener('click', () => {
  header.classList.toggle('open');
});
