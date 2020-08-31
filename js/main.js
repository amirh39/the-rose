const selectElement = (element) => document.querySelector(element);
const revealFunction = (name, origin, delay) => {
  window.sr = ScrollReveal();

  sr.reveal(name, {
    origin,
    duration: 1000,
    distance: '25rem',
    delay,
  });
};

const header = selectElement('header');
const menuToggler = selectElement('.nav__toggle');

menuToggler.addEventListener('click', () => {
  header.classList.toggle('open');
});

revealFunction('.animate--left', 'left', 300);
revealFunction('.animate--right', 'right', 600);
revealFunction('.animate--top', 'top', 600);
revealFunction('.animate--bottom', 'bottom', 600);
