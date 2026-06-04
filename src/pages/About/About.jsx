import { Link } from "react-router-dom";
import { useState } from "react";

import PjaisDp from "../../assets/images/pjais-dp.jpg";

const skills = {
  Core: ["React", "JavaScript", "HTML5", "Redux", "Firebase"],
  Styling: ["Tailwind CSS", "CSS3", "Figma", "shadcn/ui"],
  Tooling: ["Vite", "Git", "Github", "Vercel", "Netlify"],
};

const services = [
  {
    icon: "fa-solid fa-display",
    label: "Landing page, business website & dashboard app",
  },
  { icon: "fa-solid fa-cubes", label: "Component library & design systems" },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    label: "UI audits, refactors & bug fixes",
  },
];

const About = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="section about" id="about">
      {/* background glow orbs */}
      <div className="about-orb about-orb--left" aria-hidden="true" />
      <div className="about-orb about-orb--right" aria-hidden="true" />

      <div className="section-center about-container">
        <h2 className="section-title about-title">
          About <span>Me</span>
        </h2>

        <div className="about-grid">
          {/* ── LEFT COLUMN ── */}
          <div className="about-left">
            <div className="about-identity">
              <div className="about-avatar-wrap">
                {imgError ? (
                  <span className="about-avatar-fallback">PJ</span>
                ) : (
                  <div className="about-avatar-img-wrap">
                    <img
                      src={PjaisDp}
                      alt="Pradeep Jais"
                      className="about-avatar-img"
                      onError={() => setImgError(true)}
                    />
                  </div>
                )}
              </div>
              <div className="about-name-block">
                <h4 className="about-name">Pradeep Kumar</h4>
                <p className="about-role">
                  UI Developer &#8226; Frontend Web Developer
                </p>
                <div className="about-badges">
                  <span className="badge badge--green">
                    <span className="badge-dot" />
                    Open to work
                  </span>
                  <span className="badge badge--blue">
                    <i className="fa-solid fa-briefcase" aria-hidden="true" />
                    Available for freelance
                  </span>
                </div>
              </div>
            </div>

            <p className="about-bio">
              I build <strong>clean, accessible, responsive interfaces</strong>{" "}
              that feel fast and look intentional. With{" "}
              <strong>2+ years</strong> of experience crafting UIs in{" "}
              <strong>React and Tailwind CSS</strong>, I care about the details
              — pixel-perfect design, good component architecture, smooth
              interactions and code that people actually enjoy reading.
            </p>

            {/* Divider */}
            <div className="about-divider" />

            {/* Education */}
            <div className="about-edu">
              <h4 className="about-micro-label">Education & Interests</h4>
              <div className="about-edu-cards">
                <div className="about-edu-card">
                  <i
                    className="fa-solid fa-graduation-cap about-edu-icon"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="about-edu-work">
                      B.Tech in Electronic & Communication
                    </p>
                    <p className="about-edu-uni">
                      Guru Govind Singh Indraprasth University Delhi &nbsp;
                      &#8226; &nbsp; 2021
                    </p>
                  </div>
                </div>
                <div className="about-edu-card">
                  <i
                    className="fa-solid fa-heart about-edu-icon"
                    aria-hidden="true"
                  />
                  <div className="about-int-card">
                    <p className="about-edu-work">Outside Work</p>
                    <div className="about-pills">
                      <span className="about-pill">photography</span>
                      <span className="about-pill">Traveling</span>
                      <span className="about-pill">Chess</span>
                      <span className="about-pill">Cooking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="about-right">
            {/* Skills */}
            <h4 className="about-micro-label">Tech Stack</h4>
            {Object.entries(skills).map(([group, items]) => (
              <div className="about-skill-group" key={group}>
                <p className="about-skill-group-label">{group}</p>
                <div className="about-pills">
                  {items.map((s) => (
                    <span className="about-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Divider */}
            <div className="about-divider" />

            {/* Freelance services */}
            <h4 className="about-micro-label">Freelance Services</h4>
            <div className="about-services">
              {services.map((service) => (
                <div className="about-service-row" key={service.label}>
                  <i
                    className={`${service.icon} about-service-icon`}
                    aria-hidden="true"
                  />
                  <span className="about-service-label">{service.label}</span>
                </div>
              ))}
            </div>
            <a href="#services" className="about-see-more">
              See full services{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

/*
<section className="about">
      <div className="section-center about-center">
        <article className="about-img">
          <img src={PjaisDp} className="img about-photo" alt="pradeep" />
        </article>
        <article className="about-info">
          <div className="title about-title">
            <h1>about</h1>
            <div className="underline"></div>
          </div>
          <h4>Hi,</h4>
          <p>
            <strong>Pradeep kumar </strong> here, I had done my
            <strong>B.tech</strong> in
            <strong>Electronic & communication Engineering</strong>
            from Guru Govind Singh Indraprasth University Delhi. <br />
            Currently I'm looking for work as
            <strong>Frontend Web Developer.</strong> With a strong foundation in
            <strong>HTML, CSS, and JavaScript,</strong> I have done a lot of
            projects that are responsive, interactive, dynamic, and uses modern
            web development practices. In addition, i'm comfortable in using
            Visual Studio Code, chrome Dev tools, Version Control using Git and
            Github for code sharing and collaborating. I also know some basics
            of CSS library Bootstrap and currently exploring
            <strong>React JS library.</strong>
          </p>
          <p>
            As a front-end developer, my passion lies in creating visually
            appealing and highly functional websites and web applications. I'm
            passionate about learning new technologies. In future i want to have
            in-depth knowledge in web development with
            <strong>Full-stack Development</strong>
          </p>
          <Link to="/contact" className="btn about-btn">
            contact me
          </Link>
        </article>
      </div>
    </section>
*/
