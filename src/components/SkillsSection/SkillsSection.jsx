// import "./SkillsSection.css";
const SkillsSection = () => {
  return (
    <section className="skills">
      <div className="stacked-waves layer1">skills</div>

      <div className="skills-center section-center">
        <h3>Skills That Help Me Create Value</h3>
        <div className="skill-cards">
          <div className="skill-card">
            <div className="skill-heading">
              <i className="fa-solid fa-code"></i>
              <div>
                <h4>Languages</h4>
                <span>Building block of web</span>
              </div>
            </div>
            <div className="skill-names">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>C/C++</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-heading">
              <i className="fa-brands fa-react"></i>
              <div>
                <h4>Frameworks/Libraries</h4>
                <span>Makes life easier and gives you the power</span>
              </div>
            </div>
            <div className="skill-names">
              <span>React</span>
              <span>Tailwind</span>
              <span>Material UI</span>
              <span>Bootstrap</span>
              <span>Redux</span>
              <span>Ant Design</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-heading">
              <i className="fa-solid fa-tools"></i>
              <div>
                <h4>Features/Services</h4>
                <span>Values I can add to your projects</span>
              </div>
            </div>
            <div className="skill-names">
              <span>APIs Integration</span>
              <span>SPA</span>
              <span>Routing</span>
              <span>BaaS</span>
              <span>Firebase</span>
              <span>Authentication</span>
              <span>Authorization</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-heading">
              <i className="fa-solid fa-laptop-code"></i>
              <div>
                <h4>Dev Tools</h4>
                <span>Tools I am comfortable with</span>
              </div>
            </div>
            <div className="skill-names">
              <span>Git</span>
              <span>Github</span>
              <span>VS Code</span>
              <span>NPM</span>
              <span>Figma</span>
              <span>AI and ChatGPT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
