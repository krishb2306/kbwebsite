export default function ProjectCard({ title, tech, description, github }) {
    return (
      <div className="project-card">
        <h3>{title}</h3>
        <span>{tech}</span>
        <p>{description}</p>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub →
        </a>
      </div>
    );
  }