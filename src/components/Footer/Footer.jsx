import { Link } from "react-router-dom";
import { hideToolTip, showToolTip } from "../ui/ToolTip";
import { socialLinks } from "../../data/socialLinks";
import SocialLink from "../ui/SocialILink";

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
        {socialLinks.map((socialLink) => {
          return (
            <li key={socialLink.name}>
              <SocialLink socialLink={socialLink} />
            </li>
          );
        })}
      </ul>
      <p className="footer-text">
        &copy; all rights reserved. <br /> Pradeep Kumar official portfolio
        <span className="date">
          {/* 2023 */}
          {new Date().getFullYear()}
        </span>
      </p>
    </section>
  );
};
export default Footer;
