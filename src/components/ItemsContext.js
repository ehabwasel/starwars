import { useState, createContext } from 'react';
import useFetch from './useFetch';
export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [filmInfo, setIFilmInfo] = useState(
   
  );
 
  return (
    <ItemContext.Provider value={[filmInfo, setIFilmInfo]}>
      {props.children}
    </ItemContext.Provider>
  );
};
