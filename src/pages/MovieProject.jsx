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
                    <p>A movie database created using The Movie Database API</p>
                    <p>Browse movies and actors, and view details on both</p>
                    <p>User can select their favorite movies, which are displayed on a separate page</p>
                    <p>View the code on <a href="https://github.com/LaurenCummings/movie-project">Github</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default MovieProject;