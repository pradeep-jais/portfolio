import get from './getElement.js';

const scrollWrapper = get('.scroll-wrapper');
const basicProjectsContainer = get('.basic-projects');

console.log(basicProjectsContainer);

scrollWrapper.addEventListener('wheel', (e) => {
  e.preventDefault();
  scrollWrapper.scrollLeft += e.deltaY;
  // console.log(scrollWrapper.scrollLeft);
});
