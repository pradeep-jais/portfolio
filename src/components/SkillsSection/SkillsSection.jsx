// import "./SkillsSection.css";
const skillCards = [
  {
    iconClass: "fa-solid fa-code",
    title: "Languages",
    subtitle: "Building block of web",
    skills: ["HTML", "CSS", "JavaScript", "C/C++"],
  },
  {
    iconClass: "fa-brands fa-react",
    title: "Frameworks/Libraries",
    subtitle: "Makes life easier and gives you the power",
    skills: [
      "React",
      "Tailwind",
      "Material UI",
      "Bootstrap",
      "Redux",
      "Ant Design",
    ],
  },
  {
    iconClass: "fa-solid fa-tools",
    title: "Features/Services",
    subtitle: "Values I can add to your projects",
    skills: [
      "APIs Integration",
      "SPA",
      "Routing",
      "BaaS",
      "Firebase",
      "Authentication",
      "Authorization",
    ],
  },
  {
    iconClass: "fa-solid fa-laptop-code",
    title: "Dev Tools",
    subtitle: "Tools I am comfortable with",
    skills: ["Git", "Github", "VS Code", "NPM", "Figma", "AI and ChatGPT"],
  },
];

const SkillsSection = () => {
  return (
    <section className="skills section">
      <h2 className="section-title">skills</h2>
      <p>Skills That Help Me Create Value</p>
      <div className="skills-center section-center">
        <div className="skill-cards">
          {skillCards.map((card) => (
            <div className="skill-card" key={card.title}>
              <div className="skill-heading">
                <i className={card.iconClass}></i>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.subtitle}</p>
                </div>
              </div>
              <div className="skill-names">
                {card.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
