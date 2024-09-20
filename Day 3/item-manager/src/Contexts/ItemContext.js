import { createContext } from 'react';

export const ItemContext = createContext();

export const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Date.now(), name: action.name, description: action.description }];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
