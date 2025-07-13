import '../css/Project.css';

function RecipeProject() {
    return (
        <div className="selected-project">
            <div className="project-info">
                <a href="https://laurencummings.github.io/recipe-project2/" >
                    <img src={cummingsMapleCollage} alt="Collage of Cummings Maple" />
                </a>
                <div className="project-details">
                    <ul>
                        <li>Data from DummyJSON API displayed in a usable format</li>
                        <li>Built with React</li>
                        <li>User can filter data by category</li>
                        <li>Filter design changes to a hidable sidebar on smaller screens</li>
                        <li>Recipe rating data is displayed with an intuitive 5-star element</li>
                        <li>View the code on <a href="https://github.com/LaurenCummings/recipe-project2">Github</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default RecipeProject;