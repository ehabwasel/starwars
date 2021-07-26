import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { Col, Card, Row, Container, Button, ListGroup } from 'react-bootstrap';
const CharInfo = ({ value }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [badRequest, setBadRequest] = useState(false);
  const [films, setFilms] = useState([]);
  

  const handleFetch = async (value) => {
    try {
      setIsLoading(true);

     
      const setVehiclesResponse = await Promise.all(
        value.films.map((value) => fetch(value).then((res) => res.json()))
      );
      console.log(setVehiclesResponse);

      if (setVehiclesResponse.length >= 0) {
        setFilms(setVehiclesResponse);
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
         
        
        {value &&
      <ListGroup className='list-group-flush mb-3'>
        <ListGroup.Item>{`Name : ${value.name}`}</ListGroup.Item>
        
        <ListGroup.Item>
          Films :
          {films.length ? (
            films.map((value) => (
              <a className='m-2 text-danger'>{`${value.title}`}</a>
            ))
          ) : (
            <a>No films </a>
          )}
        </ListGroup.Item>
      </ListGroup>
}
    </div>
  );
};

export default CharInfo;
