import '../css/Project.css';
import movieCollage from '../assets/movieCollage.png';

function BlogProject() {

    return (
        <div className="selected-project">
            <div className="project-info">
                <a href="https://laurencummings.github.io/blog-project/" >
                    <img src={movieCollage} alt="Collage of movie project" />
                </a>
                <div className="project-details">
                    <ul>
                        <li>A movie database created using The Movie Database API</li>
                        <li>Built with React</li>
                        <li>Browse movies and actors, and view details on both</li>
                        <li>User can select their favorite movies, which are displayed on a separate page</li>
                        <li>View the code on <a href="https://github.com/LaurenCummings/blog-project">Github</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default BlogProject;