import { Link } from "react-router-dom";

import HeroImg from "../../assets/images/hero-img.png";
import { socialLinks } from "../../data/socialLinks";
import SocialLink from "../ui/SocialILink";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-title">
            <span>I'm</span>
            <h1>Pradeep</h1>
          </div>
          <h4>UI Developer & Frontend Web Developer</h4>
          <Link to="/contact" className="btn hero-btn">
            hire me
          </Link>

          <ul className="social-icons hero-icons">
            {socialLinks.map((socialLink) => {
              return (
                <li key={socialLink.name}>
                  <SocialLink socialLink={socialLink} />
                </li>
              );
            })}
          </ul>
        </article>
        <article className="hero-img-section">
          <div className="hero-img-container">
            <div className="hero-blob"></div>
            <img src={HeroImg} className="img hero-pic" />
          </div>
        </article>
      </div>
    </section>
  );
};
export default HeroSection;
