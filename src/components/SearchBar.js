import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import useFetch from './useFetch';
import CharFilms from './CharFilms';
import Loader from 'react-loader-spinner';

function SearchBar({ placeholder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const url = 'https://swapi.dev/api/people/?format=json';
  const { isLoading, badRequest, hasError, data, setIsLoading } = useFetch(url);

  const handleFilter = (event) => {
    setIsLoading(true);
    const searchWord = event.target.value;
if(searchWord.length <=3){
  setFilteredData([]);
  setIsLoading(false)
}
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord.length >= 3) {
      setFilteredData(newFilter);
      setIsLoading(false);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id='clearBtn' onClick={clearInput} />
          )}
        </div>
      </div>
      {isLoading && !hasError && (
        <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
      )}
      {badRequest && !hasError && <p className='loading'>Bad Request</p>}
      {hasError && !isLoading && (
        <p className='error text-alert'>Something Went Wrong!</p>
      )}

      {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.map((value, key) => {
            return <CharFilms value={value} />;
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
