export const CATEGORIES = [
    'Technology',
    'Science',
    'Business',
    'Health',
    'Sports',
    'Entertainment',
    'Travel',
    'Food',
    'Lifestyle',
    'Education',
    'Politics',
    'Other',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const getUniqueCategories = (articles: { category: string }[]): string[] => {
    const categories = articles.map((article) => article.category);
    return Array.from(new Set(categories)).sort();
};