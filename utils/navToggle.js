import get from './getElement.js';

// fixed navbar on scroll
const navbar = get('.navbar');

window.addEventListener('scroll', () => {
  const navHeight = navbar.getBoundingClientRect().height;
  const scrollHeight = window.scrollY;
  // console.log(scrollHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add('fix-navbar');
  } else {
    navbar.classList.remove('fix-navbar');
  }
});

const navToggle = () => {
  const toggleBtn = get('.toggle-btn');
  const closeBtn = get('.close-btn');
  const sidebar = get('.sidebar');

  // Toggle sidebar menu on small screen
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });
};

export default navToggle;
