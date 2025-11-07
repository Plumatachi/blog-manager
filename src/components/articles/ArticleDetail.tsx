import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Article } from '../../types/article';
import { useArticles } from '../../hooks/useArticles';
import { formatDate } from '../../utils/dateUtils';
import EditArticleModal from '../modals/EditArticleModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import './articles.css';

interface ArticleDetailProps {
    article: Article;
}

const ArticleDetail = ({ article }: ArticleDetailProps) => {
    const navigate = useNavigate();
    const { deleteArticle } = useArticles();
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = () => {
        deleteArticle(article.id);
        navigate('/articles');
    };

    return (
        <>
            <article className="article-detail">
                <div className="article-detail-header">
                    <div className="article-meta">
                        <span className="article-category">{article.category}</span>
                        <span className="article-date">{formatDate(article.createdAt)}</span>
                    </div>
                    <h1 className="article-detail-title">{article.title}</h1>
                    <p className="article-detail-author">✍️ By {article.author}</p>
                </div>

                <div className="article-detail-content">
                    <p>{article.content}</p>
                </div>

                <div className="article-detail-actions">
                    <button
                        className="btn btn-secondary"
                        onClick={() => setShowEditModal(true)}
                    >
                        ✏️ Edit Article
                    </button>
                    <button
                        className="btn btn-delete"
                        onClick={() => setShowDeleteModal(true)}
                    >
                        🗑️ Delete Article
                    </button>
                </div>
            </article>

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

export default ArticleDetail;