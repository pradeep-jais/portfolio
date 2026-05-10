import { useParams } from "react-router-dom";
import projectsData from "../../data/projects";

const ProjectDetail = () => {
  const { id: projectId } = useParams();

  const projectData = projectsData.find(
    (project) => project.id === parseInt(projectId),
  );

  const { id, title, techUsed, thumbnail, github, url, desc } = projectData;

  return (
    <section className="section single-project">
      <div className="title">
        <h1>Single product</h1>
        <div className="underline"></div>
      </div>
      <div className="single-project-center section-center">
        <article className="single-project-container" data-id={id}>
          <img src={thumbnail} className="img project-img" alt={title} />
          <div className="single-project-info">
            <h2>{title}</h2>
            <div className="stack">
              <p>tech stack :</p>
              <div className="tech-stack">
                {techUsed.map((tech, i) => {
                  return <span key={i}>{tech}</span>;
                })}
              </div>
            </div>
            <p className="desc">{desc}</p>
            <footer className="project-btn-container">
              <a
                href={`${github ? github : "#"}`}
                target="_blank"
                className="btn btn-hipster"
              >
                view repo
              </a>
              <a href={url} target="_blank" className="btn btn-hipster">
                view project
              </a>
            </footer>
          </div>
        </article>
      </div>
    </section>
  );
};
export default ProjectDetail;
