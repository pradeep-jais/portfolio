import { Link } from "react-router-dom";

import projectsData from "../../data/projects";
import ProjectCard from "../../components/ui/ProjectCard";

const Projects = () => {
  const location = window.location.pathname;

  const featuredProjects = projectsData
    .filter((project) => project.featured)
    .reverse();
  const basicProjects = projectsData
    .filter((project) => !project.featured)
    .reverse();

  return (
    <section className="projects section">
      {location !== "/projects" && (
        <div className="section-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      )}
      <h2 className="section-title">projects</h2>
      <div className="projects-center section-center">
        <div className="projects-code">
          <p>Find all my projects code on Github</p>
          <a
            href="https://github.com/pradeep-jais"
            target="_blank"
            className="btn view-code-btn"
          >
            <i className="fa-brands fa-github"></i>
            <span>Github</span>
          </a>
        </div>
        <h3>Featured projects</h3>
        <div className="featured-projects projects-container">
          {featuredProjects.map((project) => {
            return <ProjectCard key={project.id} projectData={project} />;
          })}
        </div>
        <h2>Basic Projects</h2>
        <div className="scroll-wrapper">
          <div className="basic-projects projects-container">
            {basicProjects.map((project) => {
              return <ProjectCard key={project.id} projectData={project} />;
            })}
          </div>
        </div>
        {location !== "/projects" && (
          <Link to="/projects" className="btn projects-btn">
            all Projects
          </Link>
        )}
      </div>
    </section>
  );
};
export default Projects;
