import '../css/ShopProject.css';
import shopProject from '../assets/shopProject2.png';

function ShopProject() {

    return (
        <div className="shop-project">
            <h1>Shop Project</h1>
            <div className="shop-project-info">
                <a href="https://laurencummings.github.io/shop-project/">
                    <img src={shopProject} alt="Shop Project" />
                </a>
                <div className="shop-project-details">
                    <p>An e-commerce frontend built with React</p>
                    <p>Add and remove items from cart</p>
                    <p>Basic search functionality</p>
                    <p>Clicking a product opens a dialog box with an image slider for multiple product photos</p>
                    <p>View the code on <a href="https://github.com/LaurenCummings/shop-project">Github</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default ShopProject;