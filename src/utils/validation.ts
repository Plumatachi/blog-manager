import type { ArticleFormData, ArticleErrors } from '../types/article';

export const validateArticle = (data: ArticleFormData): ArticleErrors => {
    const errors: ArticleErrors = {};

    if (!data.title.trim()) {
        errors.title = 'Title is required';
    } else if (data.title.trim().length < 3) {
        errors.title = 'Title must be at least 3 characters long';
    } else if (data.title.trim().length > 200) {
        errors.title = 'Title must not exceed 200 characters';
    }

    if (!data.author.trim()) {
        errors.author = 'Author is required';
    } else if (data.author.trim().length < 2) {
        errors.author = 'Author name must be at least 2 characters long';
    } else if (data.author.trim().length > 100) {
        errors.author = 'Author name must not exceed 100 characters';
    }

    if (!data.category.trim()) {
        errors.category = 'Category is required';
    }

    if (!data.content.trim()) {
        errors.content = 'Content is required';
    } else if (data.content.trim().length < 10) {
        errors.content = 'Content must be at least 10 characters long';
    } else if (data.content.trim().length > 10000) {
        errors.content = 'Content must not exceed 10,000 characters';
    }

    return errors;
};