import "../css/Project.css";
import notesCollage from "../assets/notesCollage.png";

function NotesProject() {
  return (
    <div className="selected-project">
      <h1>Notes Project</h1>
      <div className="project-info">
        <a href="https://thinkboard-project.onrender.com/">
          <img src={notesCollage} alt="Collage of notes project" />
        </a>
        <div className="project-details">
          <ul>
            <li>Users can add, update, and delete notes</li>
            <li>Built with the MERN stack</li>
            <li>UI built with Tailwind CSS and DaisyUI</li>
            <li>Uses Redis database for rate limiting</li>
            <li>Uses React Hot Toast to give user feedback when note is created, updated, or deleted</li>
            <li>
              View the code on{" "}
              <a href="https://github.com/LaurenCummings/thinkboard-project">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NotesProject;
