import get from './getElement.js';

// Footer date update
const dateDOM = get('.date');
const date = new Date();

dateDOM.textContent = date.getFullYear();

// Display icon name hint on hover

const hintTextOnIconHover = () => {
  const hintText = get('.hint-text');
  const sidebar = get('.sidebar');
  const socialLinks = [...document.querySelectorAll('.social-icons')];

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
      }
    });
  });

  sidebar.addEventListener('mouseover', (e) => {
    if (!e.target.parentElement.classList.contains('social-icon')) {
      hintText.classList.remove('show');
    }
  });
  document.body.addEventListener('mouseover', (e) => {
    if (!e.target.parentElement.classList.contains('social-icon')) {
      hintText.classList.remove('show');
    }
  });
};

export default hintTextOnIconHover;
