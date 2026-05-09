import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer section">
      <ul className="footer-links">
        <li>
          <Link to="/" className="footer-link">
            home
          </Link>
        </li>
        <li>
          <Link to="/about" className="footer-link">
            about
          </Link>
        </li>
        <li>
          <Link to="/projects" className="footer-link">
            projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="footer-link">
            contact
          </Link>
        </li>
      </ul>
      <ul className="social-icons footer-icons">
        <li>
          <a
            href="https://www.instagram.com/gkcpradip/"
            target="_blank"
            className="social-icon"
            data-label="instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pradeep-jais/"
            target="_blank"
            data-label="linkedin"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/pradeep-jais"
            target="_blank"
            className="social-icon"
            target="_blank"
            data-label="github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/PradeepGkc"
            target="_blank"
            className="social-icon"
            data-label="twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com"
            className="social-icon"
            target="_blank"
            data-label="facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
      <p className="footer-text">
        copyrights &copy; all rights reserved. Pradeep Kumar official portfolio
        <span className="date">
          {/* 2023 */}
          {new Date().getFullYear()}
        </span>
      </p>
    </section>
  );
};
export default Footer;
