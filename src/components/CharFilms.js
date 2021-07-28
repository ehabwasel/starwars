import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ItemContext } from './ItemsContext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Loader from "react-loader-spinner";
const CharInfo = ({ value }) => {
    
    const [items, setItems] = useContext(ItemContext);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [badRequest, setBadRequest] = useState(false);
  const [films, setFilms] = useState([]);
  const handleFilm = (e)=>{
      if(films.length >= 0 ){

          const filmObj = e.target.innerHTML
          const result =films.filter((value)=>  value.title === filmObj )
          
          setItems(result)
          console.log((result))
      }
   
}
 
  const handleFetch = async (value) => {
    try {
      setIsLoading(true);

      const filmsResponse = await Promise.all(
        value.films.map((value) => fetch(value).then((res) => res.json()))
      );
    //   console.log(filmsResponse);

      if (filmsResponse.length >= 0) {
        setFilms(filmsResponse);
       
      }
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch(value);
  }, [value]);

  return (
    <div>
      {isLoading && !hasError && <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}
        {badRequest && !hasError && <p className='loading'>Bad Request</p>}
        {hasError && !isLoading && (
          <p className='error text-alert'>Something Went Wrong!</p>
        )}
      {value && (
        <ListGroup className='list-group-flush mb-3'>
          <ListGroup.Item>{`Name : ${value.name}`}</ListGroup.Item>

          <ListGroup.Item>
            Films :
            {films.length ? (
              films.map((value,index) => (
                
                 <Link to ='/films'><p  onClick= {handleFilm}>{value.title}</p></Link> 
              
              ))
            ) : (
              <a>No films </a>
            )}
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default CharInfo;
