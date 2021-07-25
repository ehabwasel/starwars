import { useState, useEffect } from 'react';
import React from 'react';
import { Col, Card, Row, Container, Button } from 'react-bootstrap';

const InfoCard = ({ value, characterInfo, vehiclesNames, toggleShown }) => {
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
      
     
      if(starShipResponse.length >= 0){
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
  console.log(starShip);
  console.log(vehicles);
  return (
    <div>
      <Col md={12} sm={12} lg={12}>
        <Card border='dark' bg='light' text={'dark'} className='mb-4'>
          <Card.Body>
            <Card.Header className='mb-2 text-dark p-3 '>
              <h3>{`Title of the movie : ${value.title}`}</h3>
            </Card.Header>

            <Card.Title className='mb-2 text-danger'>
              <h4>{`Director : ${value.director}`}</h4>
            </Card.Title>
            <Card.Subtitle className='mb-2 text-success'>
              <p>{`Release_date : ${value.release_date}`}</p>
            </Card.Subtitle>
            <Card.Text className='mb-2 text-info '>
              {` Opening story : ${value.opening_crawl}`}
            </Card.Text>
            <Container>
              <Row>
                {characterInfo.map((value) => {
                  return (
                    <>
                      <Col xs={6} md={4} lg={4}>
                        <h6 className='m-2 text-danger'>{` Name: ${value.name}`}</h6>
                        <Button
                          key={value.name}
                          className='m-1 text-dark'
                          variant='outline-info'
                          size='sm'
                          onClick={() => {
                            handleVehiclesFetch(value);
                            toggleShown(value.name);
                          }}
                        >
                          {' '}
                          vehicles{' '}{vehicles.length > 0 && vehicles.map((vehicle)=> console.log(vehicle.name))}
                        </Button>
                       {/*  */}
                        <Button
                          variant='outline-success'
                          className='m=1 text-dark'
                          size='sm'
                          onClick={() => {
                            handleFetch(value);
                            toggleShown(value.name);
                          }}
                        >
                          {' '}
                          starShip
                        </Button>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default InfoCard;
