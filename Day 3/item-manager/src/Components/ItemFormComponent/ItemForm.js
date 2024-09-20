import React, { useState, useContext } from 'react';
import { ItemContext } from '../../Contexts/ItemContext';

const ItemForm = () => {
  const { dispatch } = useContext(ItemContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (name && description) {
      dispatch({ type: 'ADD_ITEM', name, description });
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleAddItem}>
      <input 
        type="text" 
        value={name} 
        placeholder="Item Name" 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        value={description} 
        placeholder="Item Description" 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
