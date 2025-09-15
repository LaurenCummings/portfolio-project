import "../css/Home.css";
import { Link } from "react-router-dom";
import shopProject from "../assets/shopProject.png";
import movieProject from "../assets/movieProject.png";
import cummingsMaple from "../assets/cummingsMaple.png";
import spaProject from "../assets/spaProjectShort.png";
import recipeProject from "../assets/recipeProject.png";
import blogProject from "../assets/blogProject.png";

function Home() {
  return (
    <div className="home">
      <h1>Full-Stack Projects</h1>
      <div className="selected-projects">
        <div className="project">
          <Link to="/blog-project">
            <img src={blogProject} alt="Cookbook Project" />
          </Link>
        </div>
        <div className="project">
          <Link to="/blog-project">
            <img src={blogProject} alt="Notes Project" />
          </Link>
        </div>
      </div>
      <h1>Front-End Projects</h1>
      <div className="selected-projects">
        <div className="project">
          <Link to="/blog-project">
            <img src={blogProject} alt="Blog Project" />
          </Link>
        </div>
        <div className="project">
          <Link to="/recipe-project">
            <img src={recipeProject} alt="Recipe Project" />
          </Link>
        </div>
        <div className="project">
          <Link to="/cummings-maple">
            <img src={cummingsMaple} alt="Cummings Maple" />
          </Link>
        </div>
        <div className="project">
          <Link to="/spa-project">
            <img src={spaProject} alt="Spa Project" />
          </Link>
        </div>
        <div className="project">
          <Link to="/shop-project">
            <img src={shopProject} alt="Shop Project" />
          </Link>
        </div>
        <div className="project">
          <Link to="/movie-project">
            <img src={movieProject} alt="Movie Project" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
