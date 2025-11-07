import type { SortOption } from '../../types/article';
import './filters.css';

interface SortFilterProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

const SortFilter = ({ value, onChange }: SortFilterProps) => {
    return (
        <div className="filter-group">
            <label htmlFor="sort" className="filter-label">
                🔄 Sort By
            </label>
            <select
                id="sort"
                className="filter-select"
                value={value}
                onChange={(e) => onChange(e.target.value as SortOption)}
            >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title (A-Z)</option>
            </select>
        </div>
    );
};

export default SortFilter;