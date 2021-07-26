import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import useFetch from './useFetch'
import { Row, Col, Button, Container } from 'react-bootstrap';
import CharFilms from "./CharFilms";

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const url = 'https://swapi.dev/api/people/?format=json';
  const {
    isLoading,
    badRequest,
    hasError,
    data
    
  } = useFetch(url);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

console.log(data )

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          onClick={()=>{ 
            setFilteredData(data)
         }}
          
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {isLoading && !hasError && <p className='loading'>Loading....</p>}
        {badRequest && !hasError && <p className='loading'>Bad Request</p>}
        {hasError && !isLoading && (
          <p className='error text-alert'>Something Went Wrong!</p>
        )}
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0,10).map((value, key) => {
            return (

              
               <CharFilms value={value}/>
             
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;