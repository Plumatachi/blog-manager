import { Link } from 'react-router-dom';
import './Layout.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <h1> <img src="./blog.png" alt="Logo blog" style={{ width: '25px', height: '25px' }} /> Blog Manager</h1>
                </Link>
                <nav className="nav">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/articles" className="nav-link">
                        Articles
                    </Link>
                    <Link to="/new" className="nav-link nav-link-primary">
                        New Article
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;