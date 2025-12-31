import { useState } from "react";
import "../styles/about.css";

export default function About() {
  const [activeTab, setActiveTab] = useState("education");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="about" className="about">
      {/* Floating shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      <div className="shape shape4"></div>

      {/* Content */}
      <div className="about-content">
        <h2>About Me</h2>
        <p>
        I’m a senior at Rutgers University, graduating this spring with a B.S. in Computer Science. I’m passionate about building clean, user-focused applications and solving real-world problems through technology. I’m currently seeking full-time opportunities and internships where I can contribute my skills in software development, collaborate with a dynamic team, and continue learning cutting-edge technologies.
        </p>

        <div className="tab-titles">
          <p
            className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
            onClick={() => openTab("education")}
          >
            Education
          </p>
          <p
            className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
            onClick={() => openTab("skills")}
          >
            Skills
          </p>
        </div>

        <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
          <ul>
            <li><span>Rutgers University</span><br />Bachelors of Science in Computer Science<br />Minor in Business Administration</li>
            <li><span>Randolph High School</span><br />Graduated 2022</li>
          </ul>
        </div>

        <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
          <ul>
            <li><span>Java</span></li>
            <li><span>JavaScript</span></li>
            <li><span>Python</span></li>
            <li><span>HTML/CSS</span></li>
            <li><span>React Native</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}