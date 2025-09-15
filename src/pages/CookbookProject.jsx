import "../css/Project.css";
import cookbookProjectCollage from "../assets/cookbookProjectCollage.png";

function CookbookProject() {
  return (
    <div className="selected-project">
      <h1>Personal Cookbook</h1>
      <div className="project-info">
        <a href="https://cookbook-project-b5v3.onrender.com/">
          <img src={cookbookProjectCollage} alt="Collage of cookbook project" />
        </a>
        <div className="project-details">
          <ul>
            <li>Fetches data from an API</li>
            <li>Built with React</li>
            <li>Users can navigate through posts or search by keyword</li>
            <li>
              A shared "feed" area that switches control between blog posts and
              search results
            </li>
            <li>Responsive down to 350px</li>
            <li>
              View the code on{" "}
              <a href="https://github.com/LaurenCummings/blog-project">
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
