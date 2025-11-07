import { Link } from 'react-router-dom';
import './pages.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero">
                <h1 className="hero-title">Welcome to Blog Manager</h1>
                <p className="hero-subtitle">
                    Your simple and powerful tool to manage articles
                </p>
                <div className="hero-buttons">
                    <Link to="/articles" className="btn btn-primary">
                        View All Articles
                    </Link>
                    <Link to="/new" className="btn btn-secondary">
                        Create New Article
                    </Link>
                </div>
            </section>

            <section className="features">
                <h2>Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">✍️</div>
                        <h3>Create Articles</h3>
                        <p>Write and publish your articles with an easy-to-use form</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📝</div>
                        <h3>Edit & Update</h3>
                        <p>Modify your existing articles anytime with our modal editor</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🗂️</div>
                        <h3>Organize by Category</h3>
                        <p>Filter and sort articles by category, date, or title</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💾</div>
                        <h3>Local Storage</h3>
                        <p>All your data is saved locally and persists between sessions</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;