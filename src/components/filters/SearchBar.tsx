import './filters.css';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <div className="search-bar">
            <label htmlFor="search" className="search-label">
                🔍 Search Articles
            </label>
            <input
                type="text"
                id="search"
                className="search-input"
                placeholder="Search by title..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;