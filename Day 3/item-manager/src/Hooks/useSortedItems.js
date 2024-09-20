import { useMemo } from 'react';

const useSortedItems = (items, sortOption) => {
  return useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.description.localeCompare(b.description);
      }
    });
  }, [items, sortOption]);
};

export default useSortedItems;
