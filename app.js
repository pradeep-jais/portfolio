// Main JavaScript
import { projects } from './utils/projectData.js';

import displayProjects from './utils/displayProjects.js';
import './utils/scrollCards.js';

import './commonFeature.js';

// true value indicating about the projects are displayed on home page. According to that relative image path is adjusted
displayProjects(projects, true);
