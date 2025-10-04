import "../css/Project.css";
import cookbookProjectCollage from "../assets/cookbookProjectCollage.png";

function CookbookProject() {
  return (
    <div className="selected-project">
      <h1>Personal Cookbook</h1>
      <div className="project-info">
        <a target="_blank" href="https://cookbook-project-b5v3.onrender.com/">
          <img src={cookbookProjectCollage} alt="Collage of cookbook project" />
        </a>
        <div className="project-details">
          <ul>
            <li>
              A personal project created to organize recipes I've collected
            </li>
            <li>Built with the MERN stack</li>
            <li>Backend code features an API and NoSQL model for recipes</li>
            <li>Logging in allows user to add, delete, and update recipes</li>
            <li>Optional light/dark mode</li>
            <li>Built with Chakra UI</li>
            <li>
              View the code on{" "}
              <a target="_blank" href="https://github.com/LaurenCummings/cookbook-project">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CookbookProject;
