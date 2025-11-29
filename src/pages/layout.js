import { Outlet, Link } from "react-router-dom";
import "./layout.css";

const Layout = () => {
    return (
        <>
            <nav className="nav-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/personal" className="nav-link">Personal</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/experience" className="nav-link">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="outlet-container">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
