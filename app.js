// Main JavaScript
import { projects } from './utils/projectData.js';
import getElement from './utils/getElement.js';
import navToggle from './utils/navToggle.js';
import hintTextOnIconHover from './utils/iconHover.js';

const featuredProjectDOM = getElement('.featured-projects');
const basicProjectDOM = getElement('.basic-projects');

navToggle();

hintTextOnIconHover();

// Populating projects on DOM
const displayProjects = (projects) => {
  console.log(projects);
  // Featured Projects
  const featuredList = projects.map((project) => {
    // destructuring
    const { title, image, featured, techUsed, github, url, id } = project;

    if (featured) {
      const techStack = techUsed
        .map((tech) => {
          return `<p>${tech}</p>`;
        })
        .join('');
      return `
          <article class="project" data-id="${id}">
            <a href="./HTML/projects.html">
              <img
                src="${image}"
                class="img project-img"
                alt="${title}"
              />
            </a>
            <div class="project-info">
              <h4>${title}</h4>
              <div class="stack">
              <p>tech stack : </p>
              <div class="tech-stack">${techStack}</div>
              </div>
              <footer class="project-btn-container">
                <a href="${github}" target="_blank" class="btn btn-hipster"
                  >view repo</a
                >
                <a href="${url}" target="_blank" class="btn btn-hipster"
                  >view project</a
                >
              </footer>
            </div>
          </article>
         `;
    }
  });
  console.log(featuredList);
  featuredProjectDOM.innerHTML = featuredList.reverse().join('');

  // Basic Projects
  const basicProjectList = projects.map((project) => {
    // destructuring
    const { title, image, featured, techUsed, url, id } = project;

    if (!featured) {
      const techStack = techUsed
        .map((tech) => {
          return `<p>${tech}</p>`;
        })
        .join('');
      return `
          <article class="project" data-id ="${id}">
            <a href="./HTML/projects.html">
              <img
                src="${image}"
                class="img project-img"
                alt="${title}"
              />
            </a>
            <div class="project-info">
              <h4>${title}</h4>
              <div class="stack">
              <p>tech stack : </p>
              <div class="tech-stack">${techStack}</div>
              </div>
              <footer class="project-btn-container">
                <a href="#repo-link" target="_blank" class="btn btn-hipster"
                  >view repo</a
                >
                <a href="${url}" target="_blank" class="btn btn-hipster"
                  >view project</a
                >
              </footer>
            </div>
          </article>
         `;
    }
  });
  basicProjectDOM.innerHTML = basicProjectList.reverse().join('');
};

displayProjects(projects);
