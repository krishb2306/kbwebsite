import "../styles/projects.css";

const projects = [
  {
    title: "Flight Delay Predictor + Airport Scorecard",
    description: "Created with Machine Learning in Python to accurately predict a specifics airplanes delay to the exact minute. Additionally includes a ranking system for each major airport in the U.S.",
    image: "src/images/airport.png",
    link: "https://github.com/krishb2306/Flight-Delay-Predictor-Airport-Scorecard",
  },
  {
    title: "ScarletParking",
    description: `
      A Rutgers University parking app that allows students to view open lots based on their permit at current or set times.  
      Top 100 in Apple’s Navigation Category.  
      10000+ impressions, with 1000+ downloads.  
      Created with JavaScript, React Native, Expo, and XCode.
    `,
    image: "src/images/sp.png", // replace with your ScarletParking screenshot
    link: "https://apps.apple.com/us/app/scarletparking/id6744491108", // update if you have repo
  },
  {
    title: "Maze Game",
    description: "Maze Game made through react native which uses your phones accelerometer and recursive backtracking to create a custom maze that you can play with several different levels.",
    image: "src/images/maze.png",
    link: "https://github.com/krishb2306/Maze-Game",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.title} />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn primary">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
  href="https://github.com/krishb2306"
  target="_blank"
  rel="noopener noreferrer"
  className="btn secondary projects-more"
>
  See more on GitHub
</a>
    </section>
  );
}