import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { Col, Card, Row, Container, Button, ListGroup } from 'react-bootstrap';
const CharInfo = ({ value }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [badRequest, setBadRequest] = useState(false);
  const [starShip, setStarShip] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const handleFetch = async (value) => {
    try {
      setIsLoading(true);

      const starShipResponse = await Promise.all(
        value.starships.map((value) => fetch(value).then((res) => res.json()))
      );
      const setVehiclesResponse = await Promise.all(
        value.vehicles.map((value) => fetch(value).then((res) => res.json()))
      );
      console.log(setVehiclesResponse);

      if (setVehiclesResponse.length >= 0) {
        setVehicles(setVehiclesResponse);
      }

      if (starShipResponse.length >= 0) {
        setStarShip(starShipResponse);
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
      <ListGroup className='list-group-flush mb-3'>
        <ListGroup.Item>{`Name : ${value.name}`}</ListGroup.Item>
        <ListGroup.Item>
          {' '}
          Starships :
          {starShip.length ? (
            starShip.map((value) => (
              <a className='m-2 text-danger'>{`${value.name}`}</a>
            ))
          ) : (
            <a>No Starships </a>
          )}
        </ListGroup.Item>
        <ListGroup.Item>
          Vehicles :
          {vehicles.length ? (
            vehicles.map((value) => (
              <a className='m-2 text-danger'>{`${value.name}`}</a>
            ))
          ) : (
            <a>No vehicls </a>
          )}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default CharInfo;
