import React from 'react'
import { useState, useEffect } from 'react';
import { Col, Card, Row, Container, Button } from 'react-bootstrap';
const CharInfo = ({value}) => {
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
  
        if (starShipResponse.length >= 0) {
          setStarShip(starShipResponse);
        }
  
        // setVehicles(setVehiclesResponse)
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    const handleVehiclesFetch = async (value) => {
      try {
        setIsLoading(true);
  
        const setVehiclesResponse = await Promise.all(
          value.vehicles.map((value) => fetch(value).then((res) => res.json()))
        );
  
        if(setVehiclesResponse >= 0){
          setVehicles(setVehiclesResponse);
  
        }
  
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    useEffect(() => {
      handleFetch(value);
      handleVehiclesFetch(value)
      
    }, [value]);
    
    console.log(starShip)
    console.log(vehicles)
  
    return <div>
      <>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={4}>
          <Col >
      <p>{value.name}</p>
      </Col>
      <Col >
      starships :{starShip.length ? starShip.map(value=> <a className='m-2 text-danger'>{`${value.name}`}</a>) :<p>no starships </p>}
      <Col >
      vehicls :{vehicles.length  ?  vehicles.map(value=> <p>{`${value.name}`}</p>) :<p>no vehicls </p> }
      </Col>
      </Col>
      </Col>
      </Row>
      </Container>
      </>
      </div>;
}

export default CharInfo

