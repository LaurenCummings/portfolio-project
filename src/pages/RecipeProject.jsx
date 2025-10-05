import "../css/Project.css";
import recipeProjectCollage from "../assets/recipeProjectCollage.png";

function RecipeProject() {
  return (
    <div className="selected-project">
      <h1>Demo Cookbook Project</h1>
      <div className="project-info">
        <a target="_blank" href="https://laurencummings.github.io/recipe-project2/">
          <img
            src={recipeProjectCollage}
            alt="Collage of Recipe Project website"
          />
        </a>
        <div className="project-details">
          <ul>
            <li>Fetches data from an API and displays in a usable format</li>
            <li>Built with React</li>
            <li>User can filter data by category</li>
            <li>
              Filter design changes to a hidable sidebar on smaller screens
            </li>
            <li>
              Recipe rating data is displayed with an intuitive 5-star element
            </li>
            <li>
              View the code on{" "}
              <a target="_blank" href="https://github.com/LaurenCummings/recipe-project2">
                Github
              </a>
            </li>
            <li>View the <a target="_blank" href="https://laurencummings.github.io/recipe-project2/">finished project</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeProject;
