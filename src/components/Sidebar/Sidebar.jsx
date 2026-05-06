const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <sidebar class={`sidebar ${isOpen ? "show" : ""}`}>
      <button class="close-btn" id="close-btn" onClick={closeSidebar}>
        <i class="fas fa-times"></i>
      </button>

      <ul class="sidebar-links">
        <li>
          <a href="./index.html">home</a>
        </li>
        <li>
          <a href="./HTML/about.html">about</a>
        </li>
        <li>
          <a href="./HTML/projects.html">projects</a>
        </li>
        <li>
          <a href="./HTML/contact.html">contact</a>
        </li>
      </ul>

      <ul class="social-icons">
        <li>
          <a
            href="https://www.instagram.com/gkcpradip/"
            class="social-icon"
            data-label="instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pradeep-jais/"
            data-label="linkedin"
            class="social-icon"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/pradeep-jais"
            class="social-icon"
            data-label="github"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/PradeepGkc"
            class="social-icon"
            data-label="twitter"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com"
            class="social-icon"
            data-label="facebook"
          >
            <i class="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
    </sidebar>
  );
};
export default Sidebar;
