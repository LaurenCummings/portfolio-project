import '../css/Project.css';
import movieProject from '../assets/movieProject.png';

function MovieProject() {

    return (
        <div className="selected-project">
            <div className="project-info">
                <a href="https://laurencummings.github.io/movie-project/" >
                    <img src={movieProject} alt="Movie Project" />
                </a>
                <div className="project-details">
                    <ul>
                        <li>A movie database created using The Movie Database API</li>
                        <li>Built with React</li>
                        <li>Browse movies and actors, and view details on both</li>
                        <li>User can select their favorite movies, which are displayed on a separate page</li>
                        <li>View the code on <a href="https://github.com/LaurenCummings/movie-project">Github</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default MovieProject;