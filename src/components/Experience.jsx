import "../styles/experience.css";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-list">
      <div className="experience-card">
  <div className="experience-header">
    <h3>Programming Instructor</h3>
    <span>Code Ninjas — Livingston, NJ</span>
    <p className="experience-date">May 2025 – September 2025</p>
  </div>

  <ul>
    <li>Mentor students ages 7–14 in programming fundamentals using JavaScript, Python, and block-based tools</li>
    <li>Guide students through full-cycle game and application development</li>
    <li>Emphasize logical thinking, debugging strategies, and iterative design principles</li>
    <li>Create an engaging, hands-on learning environment tailored to different skill levels</li>
  </ul>
</div>

<div className="experience-card">
  <div className="experience-header">
    <h3>Online Tutor</h3>
    <span>Varsity Tutors — Remote</span>
    <p className="experience-date">Nov 2023 – Present</p>
  </div>

  <ul>
    <li>5-star rated tutor for K–12 students in Computer Science, Math, Science, and English</li>
    <li>Led recurring one-on-one sessions and secured repeat clients through strong performance</li>
    <li>Communicated regularly with parents to discuss student progress and learning goals</li>
    <li>Adapted teaching strategies to individual learning styles and academic needs</li>
  </ul>
</div>
      </div>
    </section>
  );
}