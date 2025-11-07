export interface Article {
    id: string;
    title: string;
    content: string;
    author: string;
    category: string;
    createdAt: string;
}

export type ArticleFormData = Omit<Article, 'id' | 'createdAt'>;

export interface ArticleErrors {
    title?: string;
    content?: string;
    author?: string;
    category?: string;
}

export type SortOption = 'newest' | 'oldest' | 'title';