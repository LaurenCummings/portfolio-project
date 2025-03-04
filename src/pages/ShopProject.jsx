import '../css/ShopProject.css';
import website from '../assets/website.png';

function ShopProject() {

    return (
        <div className="shop-project">
            <h1>Shop Project</h1>
            <div className="project-info">
                <img src={website} alt="website" />
                <div className="project-details">
                    <p>An e-commerce frontend built with React</p>
                    <p>A detail about the project</p>
                    <p>A detail about the project</p>
                    <p>See the code on <a href="https://github.com/LaurenCummings/shop-project">Github</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default ShopProject;