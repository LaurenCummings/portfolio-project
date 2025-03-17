import '../css/Project.css';
import shopCollage from '../assets/shopCollage.png';

function ShopProject() {

    return (
        <div className="selected-project">
            <div className="project-info">
                <a href="https://laurencummings.github.io/shop-project/">
                    <img src={shopCollage} alt="Collage of shop project" />
                </a>
                <div className="project-details">
                    <ul>
                        <li>An e-commerce frontend built with React</li>
                        <li>Add and remove items from cart</li>
                        <li>Clicking a product opens a dialog box with an image slider for multiple product photos</li>
                        <li>View the code on <a href="https://github.com/LaurenCummings/shop-project">Github</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default ShopProject;