import "../css/Project.css";
import cummingsMapleCollage from "../assets/cummingsMapleCollage.png";

function CummingsMaple() {
  return (
    <div className="selected-project">
      <h1>Website for Local Business</h1>
      <div className="project-info">
        <a href="https://cummingsmaple.com">
          <img src={cummingsMapleCollage} alt="Collage of Cummings Maple" />
        </a>
        <div className="project-details">
          <ul>
            <li>
              Users can view products and read about the company's history
            </li>
            <li>Built with React</li>
            <li>Responsive down to 350px</li>
            <li>
              Features a grid design to display products, with optional
              filtering by category
            </li>
            <li>
              Individual product pages with a pop-up for product-specific
              information
            </li>
            <li>
              View the code on{" "}
              <a href="https://github.com/LaurenCummings/cummings-maple-vite">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CummingsMaple;
