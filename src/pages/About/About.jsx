import { Link } from "react-router-dom";

import PjaisDp from "../../assets/images/pjais-dp.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-wave">
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
  );
};
export default About;
