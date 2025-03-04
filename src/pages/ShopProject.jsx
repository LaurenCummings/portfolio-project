import '../css/ShopProject.css';
import shopProject from '../assets/shopProject.png';

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
                    <p>See the code on <a href="https://github.com/LaurenCummings/shop-project">Github</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default ShopProject;