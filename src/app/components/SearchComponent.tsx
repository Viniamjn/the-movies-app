import React from 'react';

interface SearchInputProps {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ query, setQuery }) => {
    return (
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            style={{ padding: '5px 10px' }}
        />
    );
};

export default SearchInput;
