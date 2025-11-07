import { useNavigate } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles';
import ArticleForm from '../components/articles/ArticleForm';
import type { Article } from '../types/article';
import './pages.css';

const NewArticle = () => {
    const navigate = useNavigate();
    const { addArticle } = useArticles();

    const handleSubmit = (articleData: Omit<Article, 'id' | 'createdAt'>) => {
        const newArticle: Article = {
            id: crypto.randomUUID(),
            ...articleData,
            createdAt: new Date().toISOString(),
        };

        addArticle(newArticle);
        navigate('/articles');
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <div className="new-article-page">
            <div className="page-header">
                <h1>Create New Article</h1>
                <p className="page-description">
                    Fill in the form below to create a new article
                </p>
            </div>

            <div className="form-container">
                <ArticleForm onSubmit={handleSubmit} onCancel={handleCancel} />
            </div>
        </div>
    );
};

export default NewArticle;