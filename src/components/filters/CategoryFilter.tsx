import { useArticles } from '../../hooks/useArticles';
import { getUniqueCategories } from '../../constants/categories';
import './filters.css';

interface CategoryFilterProps {
    value: string;
    onChange: (value: string) => void;
}

const CategoryFilter = ({ value, onChange }: CategoryFilterProps) => {
    const { articles } = useArticles();
    const uniqueCategories = getUniqueCategories(articles);

    return (
        <div className="filter-group">
            <label htmlFor="category" className="filter-label">
                📁 Category
            </label>
            <select
                id="category"
                className="filter-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="all">All Categories</option>
                {uniqueCategories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;