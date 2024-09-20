import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, sortOption, setSortOption, searchInputRef }) => {
  return (
    <div>
      <input 
        type="text" 
        ref={searchInputRef} 
        value={searchTerm} 
        placeholder="Search Items..." 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="description">Sort by Description</option>
      </select>
    </div>
  );
};

export default SearchBar;
