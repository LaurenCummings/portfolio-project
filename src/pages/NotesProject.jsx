import "../css/Project.css";
import blogCollage from "../assets/blogCollage.png";

function NotesProject() {
  return (
    <div className="selected-project">
      <h1>Notes Project</h1>
      <div className="project-info">
        <a href="https://thinkboard-project.onrender.com/">
          <img src={blogCollage} alt="Collage of blog project" />
        </a>
        <div className="project-details">
          <ul>
            <li>User can add, update, and delete notes</li>
            <li>Built with the MERN stack</li>
            <li>UI built with Tailwind CSS</li>
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
