// Main JavaScript

import get from './utils/getElement.js';

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

// Display icon name hint on hover
const hintText = get('.hint-text');
const socialLinks = [...document.querySelectorAll('.social-icons')];
const hero = get('.hero');

socialLinks.forEach((socialLink) => {
  socialLink.addEventListener('mouseover', (e) => {
    if (e.target.parentElement.classList.contains('social-icon')) {
      const iconName = e.target.parentElement.dataset.label;
      const tempRect =
        e.target.parentElement.parentElement.getBoundingClientRect();
      const top = tempRect.bottom;
      const center = (tempRect.left + tempRect.right) / 2;
      hintText.style.left = `${center}px`;
      hintText.style.top = `${top}px`;
      hintText.classList.add('show');
      hintText.textContent = iconName;
      console.log(hintText);
    }
  });
});

sidebar.addEventListener('mouseover', (e) => {
  if (!e.target.parentElement.classList.contains('social-icon')) {
    hintText.classList.remove('show');
  }
});
hero.addEventListener('mouseover', (e) => {
  if (!e.target.parentElement.classList.contains('social-icon')) {
    hintText.classList.remove('show');
  }
});
