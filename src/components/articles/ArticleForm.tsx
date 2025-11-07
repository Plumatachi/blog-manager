import { useState, type FormEvent } from 'react';
import type { Article, ArticleFormData, ArticleErrors } from '../../types/article';
import { validateArticle } from '../../utils/validation';
import { CATEGORIES } from '../../constants/categories';
import './articles.css';

interface ArticleFormProps {
    initialData?: Article;
    onSubmit: (data: ArticleFormData) => void;
    onCancel: () => void;
    submitLabel?: string;
}

const ArticleForm = ({
                         initialData,
                         onSubmit,
                         onCancel,
                         submitLabel = 'Create Article',
                     }: ArticleFormProps) => {
    const [formData, setFormData] = useState<ArticleFormData>({
        title: initialData?.title || '',
        content: initialData?.content || '',
        author: initialData?.author || '',
        category: initialData?.category || '',
    });

    const [errors, setErrors] = useState<ArticleErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof ArticleErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleBlur = (field: string) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const validationErrors = validateArticle(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setTouched({
                title: true,
                content: true,
                author: true,
                category: true,
            });
            return;
        }

        onSubmit(formData);
    };

    const showError = (field: keyof ArticleErrors) => {
        return touched[field] && errors[field];
    };

    return (
        <form className="article-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
                <label htmlFor="title" className="form-label">
                    Title <span className="required">*</span>
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className={`form-input ${showError('title') ? 'error' : ''}`}
                    value={formData.title}
                    onChange={handleChange}
                    onBlur={() => handleBlur('title')}
                    placeholder="Enter article title"
                />
                {showError('title') && (
                    <span className="error-message">{errors.title}</span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="author" className="form-label">
                    Author <span className="required">*</span>
                </label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    className={`form-input ${showError('author') ? 'error' : ''}`}
                    value={formData.author}
                    onChange={handleChange}
                    onBlur={() => handleBlur('author')}
                    placeholder="Enter author name"
                />
                {showError('author') && (
                    <span className="error-message">{errors.author}</span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="category" className="form-label">
                    Category <span className="required">*</span>
                </label>
                <select
                    id="category"
                    name="category"
                    className={`form-select ${showError('category') ? 'error' : ''}`}
                    value={formData.category}
                    onChange={handleChange}
                    onBlur={() => handleBlur('category')}
                >
                    <option value="">Select a category</option>
                    {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                {showError('category') && (
                    <span className="error-message">{errors.category}</span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="content" className="form-label">
                    Content <span className="required">*</span>
                </label>
                <textarea
                    id="content"
                    name="content"
                    className={`form-textarea ${showError('content') ? 'error' : ''}`}
                    value={formData.content}
                    onChange={handleChange}
                    onBlur={() => handleBlur('content')}
                    placeholder="Write your article content..."
                    rows={10}
                />
                {showError('content') && (
                    <span className="error-message">{errors.content}</span>
                )}
            </div>

            <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                    {submitLabel}
                </button>
            </div>
        </form>
    );
};

export default ArticleForm;