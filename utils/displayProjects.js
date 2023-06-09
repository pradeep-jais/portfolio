import getElement from './getElement.js';

const featuredProjectDOM = getElement('.featured-projects');
const basicProjectDOM = getElement('.basic-projects');

// Populating projects on DOM
const displayProjects = (projects, flag) => {
  let newImage;
  let singleProject;
  // Featured Projects
  const featuredList = projects.map((project) => {
    // destructuring
    const { title, image, featured, techUsed, github, url, id } = project;

    // Github page not displaying the image, bug fixed

    if (flag) {
      newImage = image.slice(1);
      singleProject = './HTML/project.html';
    } else {
      newImage = image;
      singleProject = './project.html';
    }

    if (featured) {
      const techStack = techUsed
        .map((tech) => {
          return `<p>${tech}</p>`;
        })
        .join('');
      return `
          <article class="project" data-id="${id}">
            <a href="${singleProject}?id=${id}">
              <img
                src="${newImage}"
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
  featuredProjectDOM.innerHTML = featuredList.reverse().join('');

  // Basic Projects
  const basicProjectList = projects.map((project) => {
    // destructuring
    const { title, image, featured, techUsed, url, id } = project;
    // Github page not displaying the image, bug fixed
    if (flag) {
      newImage = image.slice(1);
    } else {
      newImage = image;
    }
    if (!featured) {
      const techStack = techUsed
        .map((tech) => {
          return `<p>${tech}</p>`;
        })
        .join('');
      return `
          <article class="project" data-id ="${id}">
            <a href="${singleProject}?id=${id}">
              <img
                src="${newImage}"
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

export default displayProjects;
