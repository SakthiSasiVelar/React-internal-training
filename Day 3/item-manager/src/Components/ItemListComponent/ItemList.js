import React, { useContext } from 'react';
import { ItemContext } from '../../Contexts/ItemContext';
import useFilteredItems from '../../Hooks/useFilteredItems';
import useSortedItems from '../../Hooks/useSortedItems';

const ItemList = ({ searchTerm, sortOption }) => {
  const { items, dispatch } = useContext(ItemContext);

  const filteredItems = useFilteredItems(items, searchTerm);
  const sortedItems = useSortedItems(filteredItems, sortOption);

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.id}>
          <strong>{item.name}</strong>: {item.description}
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
