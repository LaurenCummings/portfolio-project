import "../css/Project.css";
import spaProject from "../assets/spaProject.png";

function SpaProject() {
  return (
    <div className="selected-project">
      <h1>Demo Business Website Project</h1>
      <div className="project-info">
        <a target="_blank" href="https://laurencummings.github.io/spa-project/">
          <img src={spaProject} alt="Spa Project Page" />
        </a>
        <div className="project-details">
          <ul>
            <li>
              Users can read about services the business offers and schedule
              appointments
            </li>
            <li>Built with React</li>
            <li>A single page website design</li>
            <li>Features auto-scrolling to navigate page</li>
            <li>Utilizes React-Calendar for date selection</li>
            <li>CSS animations used to create a continuously moving banner</li>
            <li>
              View the code on{" "}
              <a target="_blank" href="https://github.com/LaurenCummings/spa-project">Github</a>
            </li>
            <li>View the <a target="_blank" href="https://laurencummings.github.io/spa-project/">finished project</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpaProject;
