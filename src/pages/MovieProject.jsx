import '../css/MovieProject.css';
import movieProject from '../assets/movieProject.png';

function MovieProject() {

    return (
        <div className="movie-project">
            <h1>Movie Project</h1>
            <div className="movie-project-info">
                <a href="https://laurencummings.github.io/movie-project/" >
                    <img src={movieProject} alt="Movie Project" />
                </a>
                <div className="movie-project-details">
                    <p>A movie database created using The Movie Database API</p>
                    <p>See the code on <a href="https://github.com/LaurenCummings/movie-project">Github</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default MovieProject;