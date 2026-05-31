import { Link } from "react-router-dom";

import projectsData from "../../data/projects";
import ProjectCard from "../../components/ui/ProjectCard";

const Projects = () => {
  const featuredProjects = projectsData
    .filter((project) => project.featured)
    .reverse();
  const basicProjects = projectsData
    .filter((project) => !project.featured)
    .reverse();

  return (
    <section className="projects section">
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
        <h3>Basic Projects</h3>
        <div className="basic-projects projects-container">
          {basicProjects.map((project) => {
            return <ProjectCard key={project.id} projectData={project} />;
          })}
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
