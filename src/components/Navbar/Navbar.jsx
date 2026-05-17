import logoImg from "../../assets/images/pjais-logo.jpg";
import Sidebar from "../Sidebar";
import { useState } from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    if (document.documentElement.className === "theme-light") {
      document.documentElement.classList.remove("theme-light");
    } else {
      document.documentElement.classList.add("theme-light");
    }
  };

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
      <nav className="navbar">
        <div className="nav-center section-center">
          <NavLink to="/" className="logo">
            <img src={logoImg} alt="logo image" className="logo-img" />
            <h3 className="logo-text">
              pradeep <span>jais.</span>
            </h3>
          </NavLink>
          <ul className="nav-links show">
            <li>
              <NavLink to="/" className="nav-link">
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link">
                projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                contact
              </NavLink>
            </li>
            <li>
              <button className="theme-btn" onClick={toggleTheme}>
                <i class="fa-solid fa-lightbulb"></i>
              </button>
            </li>
          </ul>
          <button
            className="toggle-btn"
            type="menu"
            onClick={() => setIsSidebarOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
