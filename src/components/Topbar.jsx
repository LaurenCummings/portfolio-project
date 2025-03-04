import '../css/Topbar.css';
import { Link } from 'react-router-dom';

function Topbar() {
    return (
        <div className="topbar">
            <Link to="/">
                <h1>Lauren Cummings</h1>
            </Link>
        </div>
    )
}

export default Topbar;