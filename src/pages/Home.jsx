import '../css/Home.css';
import { Link } from 'react-router-dom';
import shopProject from '../assets/shopProject.png';
import movieProject from '../assets/movieProject.png';

function Home() {
    
    return (
      <div className="home">
        <h1>Selected Projects</h1>
        <div className="selected-projects">
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
    )
}

export default Home;