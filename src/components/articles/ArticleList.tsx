import type { Article } from '../../types/article';
import ArticleCard from './ArticleCard';
import './articles.css';

interface ArticleListProps {
    articles: Article[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
    return (
        <div className="article-list">
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
};

export default ArticleList;