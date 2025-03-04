import '../css/Home.css';
import { Link } from 'react-router-dom';
import website from '../assets/website.png';

function Home() {
    
    return (
      <div className="home">
        <h1>Selected Projects</h1>
        <div className="selected-projects">
            <div className="project">
                <Link to="/shop-project">
                    <img src={website} alt="website" />
                </Link>                
            </div>
            <div className="project">
                <Link to="/shop-project">
                    <img src={website} alt="website" />
                </Link>                
            </div>
        </div>
      </div>
    )
}

export default Home;