import { useState, createContext } from 'react';
import useFetch from './useFetch';
export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState(
   
  );
 
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  );
};
