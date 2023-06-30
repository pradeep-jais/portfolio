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
