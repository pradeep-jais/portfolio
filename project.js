import getElement from './utils/getElement.js';
import { projects } from './utils/projectData.js';
import hintTextOnIconHover from './utils/iconHover.js';
import navToggle from './utils/navToggle.js';

window.addEventListener('DOMContentLoaded', () => {
  navToggle();
  hintTextOnIconHover();
});

const projectContainer = getElement('.single-project-center');

const displaySingleProject = () => {
  // getting id from url
  let param = window.location.search;
  param = new URLSearchParams(param);
  const id = param.get('id');

  const project = projects.reduce((acc, project) => {
    if (project.id == id) {
      const { id, title, techUsed, image, github, url, desc } = project;

      // Dynamic page title
      document.title = `Pradeep Jais | ${title}`;

      const techStack = techUsed
        .map((tech) => {
          return `<p>${tech}</p>`;
        })
        .join('');
      acc = `<article class="single-project-container" data-id="${id}">
          <img
            src="${image}"
            class="img project-img"
            alt="${title}"
          />

          <div class="single-project-info">
            <h4>${title}</h4>
            <div class="stack">
              <p>tech stack :</p>
              <div class="tech-stack">${techStack}</div>
              
            </div>
            <p class="desc">${desc}</p>
            <footer class="project-btn-container">
              <a href="${
                github ? github : '#'
              }" target="_blank" class="btn btn-hipster"
                >view repo</a
              >
              <a href="${url}" target="_blank" class="btn btn-hipster"
                >view project</a
              >
            </footer>
          </div>
        </article>`;

      projectContainer.innerHTML = acc;
      return acc;
    }
  }, '');
};

displaySingleProject();
