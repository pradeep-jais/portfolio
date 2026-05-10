import { Link } from "react-router-dom";
import { socialLinks } from "../../data/socialLinks";
import SocialLink from "../ui/SocialILink";

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
        {socialLinks.map((socialLink) => {
          return (
            <li key={socialLink.name}>
              <SocialLink socialLink={socialLink} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
