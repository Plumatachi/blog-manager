import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles';
import ArticleList from '../components/articles/ArticleList';
import SearchBar from '../components/filters/SearchBar';
import CategoryFilter from '../components/filters/CategoryFilter';
import SortFilter from '../components/filters/SortFilter';
import './pages.css';

const Articles = () => {
    const { articles } = useArticles();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');

    const filteredArticles = useMemo(() => {
        let filtered = [...articles];

        if (searchTerm) {
            filtered = filtered.filter((article) =>
                article.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(
                (article) => article.category === selectedCategory
            );
        }

        filtered.sort((a, b) => {
            if (sortBy === 'newest') {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            } else if (sortBy === 'oldest') {
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            } else {
                return a.title.localeCompare(b.title);
            }
        });

        return filtered;
    }, [articles, searchTerm, selectedCategory, sortBy]);

    return (
        <div className="articles-page">
            <div className="page-header">
                <h1>All Articles</h1>
                <Link to="/new" className="btn btn-primary">
                    ➕ New Article
                </Link>
            </div>

            <div className="filters-section">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
                <div className="filters-row">
                    <CategoryFilter
                        value={selectedCategory}
                        onChange={setSelectedCategory}
                    />
                    <SortFilter value={sortBy} onChange={setSortBy} />
                </div>
            </div>

            <div className="articles-count">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </div>

            {filteredArticles.length === 0 ? (
                <div className="empty-state">
                    <p className="empty-icon">📭</p>
                    <h3>No articles found</h3>
                    <p>
                        {articles.length === 0
                            ? 'Start by creating your first article!'
                            : 'Try adjusting your filters or search term.'}
                    </p>
                    {articles.length === 0 && (
                        <Link to="/new" className="btn btn-primary">
                            Create First Article
                        </Link>
                    )}
                </div>
            ) : (
                <ArticleList articles={filteredArticles} />
            )}
        </div>
    );
};

export default Articles;