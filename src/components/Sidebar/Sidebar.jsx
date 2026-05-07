import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show" : ""}`}>
      <button className="close-btn" id="close-btn" onClick={closeSidebar}>
        <i className="fas fa-times"></i>
      </button>

      <ul className="sidebar-links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>

      <ul className="social-icons">
        <li>
          <a
            href="https://www.instagram.com/gkcpradip/"
            className="social-icon"
            data-label="instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pradeep-jais/"
            data-label="linkedin"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/pradeep-jais"
            className="social-icon"
            data-label="github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/PradeepGkc"
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
            data-label="facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
