import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../../types/article';
import { useArticles } from '../../hooks/useArticles';
import { formatDate } from '../../utils/dateUtils';
import EditArticleModal from '../modals/EditArticleModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import './articles.css';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
    const { deleteArticle } = useArticles();
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = () => {
        deleteArticle(article.id);
        setShowDeleteModal(false);
    };

    const truncateContent = (text: string, maxLength: number = 150) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <>
            <div className="article-card">
                <Link to={`/articles/${article.id}`} className="article-card-link">
                    <div className="article-card-header">
                        <span className="article-category">{article.category}</span>
                        <span className="article-date">{formatDate(article.createdAt)}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-preview">{truncateContent(article.content)}</p>
                    <div className="article-author">
                        <span>✍️ By {article.author}</span>
                    </div>
                </Link>
                <div className="article-actions">
                    <button
                        className="btn-action btn-edit"
                        onClick={(e) => {
                            e.preventDefault();
                            setShowEditModal(true);
                        }}
                        aria-label="Edit article"
                    >
                        ✏️ Edit
                    </button>
                    <button
                        className="btn-action btn-delete"
                        onClick={(e) => {
                            e.preventDefault();
                            setShowDeleteModal(true);
                        }}
                        aria-label="Delete article"
                    >
                        🗑️ Delete
                    </button>
                </div>
            </div>

            {showEditModal && (
                <EditArticleModal
                    article={article}
                    onClose={() => setShowEditModal(false)}
                />
            )}

            {showDeleteModal && (
                <DeleteConfirmationModal
                    articleTitle={article.title}
                    onConfirm={handleDelete}
                    onCancel={() => setShowDeleteModal(false)}
                />
            )}
        </>
    );
};

export default ArticleCard;