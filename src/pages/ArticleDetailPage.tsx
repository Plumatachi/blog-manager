import { useParams, useNavigate, Link } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles';
import ArticleDetail from '../components/articles/ArticleDetail';
import './pages.css';

const ArticleDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { articles } = useArticles();

    const article = articles.find((a) => a.id === id);

    if (!article) {
        return (
            <div className="article-detail-page">
                <div className="error-state">
                    <p className="error-icon">❌</p>
                    <h2>Article Not Found</h2>
                    <p>The article you're looking for doesn't exist or has been deleted.</p>
                    <div className="error-actions">
                        <button onClick={() => navigate(-1)} className="btn btn-secondary">
                            Go Back
                        </button>
                        <Link to="/articles" className="btn btn-primary">
                            View All Articles
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="article-detail-page">
            <button onClick={() => navigate(-1)} className="back-button">
                ← Back
            </button>
            <ArticleDetail article={article} />
        </div>
    );
};

export default ArticleDetailPage;