import React, { useReducer, useState, useEffect, useRef } from 'react';
import ItemList from './Components/ItemListComponent/ItemList'
import ItemForm from './Components/ItemFormComponent/ItemForm';
import SearchBar from './Components/SearchSortComponent/SearchBar';
import { ItemContext, itemReducer } from './Contexts/ItemContext';

const App = () => {
  const [items, dispatch] = useReducer(itemReducer, [], () => {
    const storedItems = localStorage.getItem('items');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const searchInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      <div>
        <h1>Dynamic Item Manager</h1>
        <ItemForm />
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOption={sortOption}
          setSortOption={setSortOption}
          searchInputRef={searchInputRef}
        />
        <ItemList searchTerm={searchTerm} sortOption={sortOption} />
      </div>
    </ItemContext.Provider>
  );
};

export default App;
