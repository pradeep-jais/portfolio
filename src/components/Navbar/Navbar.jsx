import logoImg from "../../assets/images/pjais-logo.jpg";
import Sidebar from "../Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
      <nav class="navbar">
        <div class="nav-center section-center">
          <a href="#" class="logo">
            <img src={logoImg} alt="logo image" class="logo-img" />
            <h3 class="logo-text">
              pradeep <span>jais.</span>
            </h3>
          </a>
          <ul class="nav-links show">
            <li>
              <a href="./index.html" class="nav-link">
                home
              </a>
            </li>
            <li>
              <a href="./HTML/about.html" class="nav-link">
                about
              </a>
            </li>
            <li>
              <a href="./HTML/projects.html" class="nav-link">
                projects
              </a>
            </li>
            <li>
              <a href="./HTML/contact.html" class="nav-link">
                contact
              </a>
            </li>
          </ul>
          <button
            class="toggle-btn"
            type="menu"
            onClick={() => setIsSidebarOpen(true)}
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
