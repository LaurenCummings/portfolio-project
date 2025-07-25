import '../css/Project.css';
import blogCollage from '../assets/blogCollage.png';

function BlogProject() {

    return (
        <div className="selected-project">
            <div className="project-info">
                <a href="https://laurencummings.github.io/blog-project/" >
                    <img src={movieCollage} alt="Collage of movie project" />
                </a>
                <div className="project-details">
                    <ul>
                        <li>A demo blog created with the DummyJSON API</li>
                        <li>Built with React</li>
                        <li>Users can navigate through posts or search by keyword</li>
                        <li>A shared "feed" area that switches control between blog posts and search results</li>
                        <li>Responsive down to 350px</li>
                        <li>View the code on <a href="https://github.com/LaurenCummings/blog-project">Github</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default BlogProject;