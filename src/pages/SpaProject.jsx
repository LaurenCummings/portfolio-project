import '../css/Project.css';
import movieCollage from '../assets/movieCollage.png';

function SpaProject() {

    return (
        <div className="selected-project">
            <div className="project-info">
                <a href="https://laurencummings.github.io/movie-project/" >
                    <img src={movieCollage} alt="Collage of movie project" />
                </a>
                <div className="project-details">
                    <ul>
                        <li>A mock business site for a spa, where users can read about services offered and schedule appointments</li>
                        <li>Built with React</li>
                        <li>A single page design with no routing</li>
                        <li>Features auto-scrolling to navigate page</li>
                        <li>Utilizes React-Calendar for date selection</li>
                        <li>CSS animations used to create a continuously moving banner</li>
                        <li>View the code on <a href="https://github.com/LaurenCummings/spa-project">Github</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default SpaProject;