import navToggle from './utils/navToggle.js';
import hintTextOnIconHover from './utils/iconHover.js';
import { projects } from './utils/projectData.js';
import displayProjects from './utils/displayProjects.js';

navToggle();

hintTextOnIconHover();

displayProjects(projects);
