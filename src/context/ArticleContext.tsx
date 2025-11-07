import { createContext, type ReactNode } from 'react';
import type { Article } from '../types/article';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ArticleContextType {
    articles: Article[];
    addArticle: (article: Article) => void;
    updateArticle: (id: string, updatedArticle: Article) => void;
    deleteArticle: (id: string) => void;
    getArticleById: (id: string) => Article | undefined;
}

export const ArticleContext = createContext<ArticleContextType | undefined>(
    undefined
);

interface ArticleProviderProps {
    children: ReactNode;
}

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
    const [articles, setArticles] = useLocalStorage<Article[]>('blog-articles', []);

    const addArticle = (article: Article) => {
        setArticles((prev) => [...prev, article]);
    };

    const updateArticle = (id: string, updatedArticle: Article) => {
        setArticles((prev) =>
            prev.map((article) => (article.id === id ? updatedArticle : article))
        );
    };

    const deleteArticle = (id: string) => {
        setArticles((prev) => prev.filter((article) => article.id !== id));
    };

    const getArticleById = (id: string): Article | undefined => {
        return articles.find((article) => article.id === id);
    };

    const value: ArticleContextType = {
        articles,
        addArticle,
        updateArticle,
        deleteArticle,
        getArticleById,
    };

    return (
        <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
    );
};