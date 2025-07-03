import '../css/Home.css';
import { Link } from 'react-router-dom';
import shopProject from '../assets/shopProject.png';
import movieProject from '../assets/movieProject.png';

function Home() {
    
    return (
      <div className="home">
        <div className="selected-projects">
            <div className="project">
                <Link to="/cummings-maple">
                    <img src={shopProject} alt="Cummings Maple" />
                </Link>                
            </div> 
            <div className="project">
                <Link to="/spa-project">
                    <img src={shopProject} alt="Spa Project" />
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
    )
}

export default Home;