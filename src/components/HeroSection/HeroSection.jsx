import { Link } from "react-router-dom";

import HeroImg from "../../assets/images/hero-img.png";
import { showToolTip, hideToolTip } from "../ToolTip";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-title">
            <h1>I'm Pradeep</h1>
            <div className="underline"></div>
          </div>
          <h4>UI Designer & Frontend Web Developer</h4>
          <Link to="/contact" className="btn hero-btn">
            hire me
          </Link>

          <ul className="social-icons hero-icons">
            <li>
              <a
                href="https://www.instagram.com/gkcpradip/"
                target="_blank"
                className="social-icon"
                data-label="instagram"
                onMouseEnter={(e) => {
                  showToolTip(e);
                }}
                onMouseLeave={hideToolTip}
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
                onMouse
                onMouseOver={(e) => {
                  showToolTip(e);
                }}
                onMouseLeave={hideToolTip}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/pradeep-jais"
                target="_blank"
                className="social-icon"
                data-label="github"
                onMouseOver={(e) => {
                  showToolTip(e);
                }}
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
        </article>
        <article className="hero-img-container">
          <div className="hero-img">
            <svg
              className="hero-blob"
              id="visual"
              viewBox="0 0 675 900"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <g transform="translate(310.0128149563065 419.03017107757614)">
                <path
                  id="blob1"
                  d="M155.6 -209.3C197.9 -183.4 225.9 -132.9 251.1 -76.6C276.3 -20.2 298.6 42 285.6 96.1C272.6 150.2 224.2 196 170.7 231.8C117.2 267.6 58.6 293.3 -3 297.5C-64.7 301.7 -129.3 284.3 -171.5 244.9C-213.6 205.4 -233.3 143.8 -234.4 88.4C-235.5 33.1 -218.1 -16.1 -203.8 -68.2C-189.6 -120.3 -178.6 -175.4 -145.1 -204.2C-111.7 -233 -55.8 -235.5 0.4 -236.1C56.6 -236.6 113.2 -235.2 155.6 -209.3"
                  fill="#BB004B"
                ></path>
              </g>
              <g transform="translate(362.1715694936968 406.97398135142146)">
                <path
                  id="blob2"
                  d="M117.2 -164.3C151.8 -136.2 179.6 -101.8 202 -59.3C224.4 -16.9 241.6 33.6 238.9 88.8C236.3 143.9 214 203.8 170.9 243.8C127.7 283.8 63.9 303.9 2.7 300.1C-58.4 296.4 -116.8 268.7 -170.3 232.1C-223.8 195.5 -272.4 149.9 -285 96.1C-297.7 42.3 -274.4 -19.6 -241.7 -65.7C-209.1 -111.8 -167.2 -142.1 -125.3 -167.8C-83.5 -193.5 -41.7 -214.8 -0.2 -214.5C41.3 -214.2 82.7 -192.4 117.2 -164.3"
                  fill="#BB004B"
                ></path>
              </g>
            </svg>

            <img src={HeroImg} className="img hero-photo" />
          </div>
        </article>
      </div>
    </section>
  );
};
export default HeroSection;
