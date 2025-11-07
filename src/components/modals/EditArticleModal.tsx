import type { Article, ArticleFormData } from '../../types/article';
import { useArticles } from '../../hooks/useArticles';
import ArticleForm from '../articles/ArticleForm';
import '../articles/Articles.css';

interface EditArticleModalProps {
    article: Article;
    onClose: () => void;
}

const EditArticleModal = ({ article, onClose }: EditArticleModalProps) => {
    const { updateArticle } = useArticles();

    const handleSubmit = (formData: ArticleFormData) => {
        const updatedArticle: Article = {
            ...article,
            ...formData,
        };
        updateArticle(article.id, updatedArticle);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Edit Article</h2>
                    <button className="modal-close" onClick={onClose} aria-label="Close">
                        ✕
                    </button>
                </div>

                <div className="modal-body">
                    <ArticleForm
                        initialData={article}
                        onSubmit={handleSubmit}
                        onCancel={onClose}
                        submitLabel="Update Article"
                    />
                </div>
            </div>
        </div>
    );
};

export default EditArticleModal;