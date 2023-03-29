import get from './getElement.js';

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
