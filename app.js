// Main JavaScript
import { projects } from './utils/projectData.js';
import navToggle from './utils/navToggle.js';
import hintTextOnIconHover from './utils/iconHover.js';
import displayProjects from './utils/displayProjects.js';
import './utils/scrollCards.js';

navToggle();

hintTextOnIconHover();

// true value indicating about the projects are displayed on home page. According to that relative image path is adjusted
displayProjects(projects, true);

// Animate hero picture blob
const animateBlob = KUTE.fromTo(
  '#blob1',
  { path: '#blob1' },
  { path: '#blob2' },
  { repeat: 999, duration: 4000, yoyo: true }
);
animateBlob.start();
