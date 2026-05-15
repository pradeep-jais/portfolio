import { Link } from "react-router-dom";

const ProjectCard = ({ projectData }) => {
  const { id, thumbnail, title, desc, techUsed, github, url } = projectData;

  return (
    <article className="project" data-id={id}>
      <Link to={`/project/${id}`}>
        <img src={thumbnail} className="img project-img" alt={title} />
      </Link>
      <div className="project-info">
        <h4>{title}</h4>
        <div className="stack">
          <span>tech stack:</span>
          <div className="tech-stack">
            {techUsed.map((tech, i) => {
              return <span key={i}>{tech}</span>;
            })}
          </div>
        </div>
        <footer
          className={`project-btn-container ${github || "project-btn-container-flag"}`}
        >
          {github && (
            <a href={github} target="_blank" className="btn">
              view repo
            </a>
          )}
          <a href={url} target="_blank" className="btn">
            view project
          </a>
        </footer>
      </div>
    </article>
  );
};
export default ProjectCard;
