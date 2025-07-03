import '../css/Project.css';
import movieCollage from '../assets/movieCollage.png';

function CummingsMaple() {

    return (
        <div className="selected-project">
            <div className="project-info">
                <a href="https://cummingsmaple.com" >
                    <img src={movieCollage} alt="Collage of movie project" />
                </a>
                <div className="project-details">
                    <ul>
                        <li>A site for a local business where users can view products and read about the company's history</li>
                        <li>Built with React</li>
                        <li>Responsive down to XXX px</li>
                        <li>View the code on <a href="https://github.com/LaurenCummings/cummings-maple-vite">Github</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default CummingsMaple;