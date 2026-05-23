import { Link } from "react-router-dom";

const tagThemes = {
  React: {
    bg: "rgba(97,218,251,0.1)",
    border: "rgba(97,218,251,0.25)",
    color: "#61dafb",
  },
  ReactJS: {
    bg: "rgba(97,218,251,0.1)",
    border: "rgba(97,218,251,0.25)",
    color: "#61dafb",
  },
  JavaScript: {
    bg: "rgba(247,223,30,0.1)",
    border: "rgba(247,223,30,0.25)",
    color: "#f7df1e",
  },
  TypeScript: {
    bg: "rgba(49,120,198,0.12)",
    border: "rgba(49,120,198,0.3)",
    color: "#3178c6",
  },
  HTML: {
    bg: "rgba(228,77,38,0.1)",
    border: "rgba(228,77,38,0.25)",
    color: "#e44d26",
  },
  CSS: {
    bg: "rgba(21,114,182,0.1)",
    border: "rgba(21,114,182,0.25)",
    color: "#1572b6",
  },
  Firebase: {
    bg: "rgba(255,202,40,0.1)",
    border: "rgba(255,202,40,0.25)",
    color: "#ffca28",
  },
  Node: {
    bg: "rgba(83,158,70,0.1)",
    border: "rgba(83,158,70,0.25)",
    color: "#539e46",
  },
  Tailwind: {
    bg: "rgba(56,189,248,0.1)",
    border: "rgba(56,189,248,0.25)",
    color: "#38bdf8",
  },
};

const ProjectCard = ({ projectData }) => {
  const { id, thumbnail, title, desc, techUsed, github, url } = projectData;

  return (
    <article className="project" data-id={id}>
      <div className="project-img-container">
        <Link to={`/project/${id}`}>
          <img src={thumbnail} className="img project-img" alt={title} />
        </Link>
      </div>
      <div className="project-info">
        <h4>{title}</h4>
        <hr className="pc-divider" />

        <p className="pc-stack-label">Tech Stack</p>
        <div className="pc-tags">
          {techUsed.map((tag) => {
            const t = tagThemes[tag] || {
              bg: "rgba(148,163,184,0.08)",
              border: "rgba(148,163,184,0.2)",
              color: "#94a3b8",
            };
            return (
              <span
                key={tag}
                className="pc-tag"
                style={{
                  background: t.bg,
                  border: `1px solid ${t.border}`,
                  color: t.color,
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <footer
          className={`project-btn-container ${github || "project-btn-container-flag"}`}
        >
          {github && (
            <a href={github} target="_blank" className="pc-btn-repo">
              <i className="fa-brands fa-github"></i>
              <span>view repo</span>
            </a>
          )}
          <a href={url} target="_blank" className="pc-btn-live">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <span>view project</span>
          </a>
        </footer>
      </div>
    </article>
  );
};
export default ProjectCard;
