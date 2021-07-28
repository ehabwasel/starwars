import React from 'react';
import { useState, useEffect } from 'react';
import {  ListGroup } from 'react-bootstrap';
import Loader from "react-loader-spinner";
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
         
         {isLoading && !hasError && <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />}
        {badRequest && !hasError && <p className='loading'>Bad Request</p>}
        {hasError && !isLoading && (
          <p className='error text-alert'>Something Went Wrong!</p>
        )}

        {value &&
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
}
    </div>
  );
};

export default CharInfo;
