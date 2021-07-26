import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { Row, Col, Button, Container } from 'react-bootstrap';
import InfoCard from './InfoCard';

const Home = () => {
  const [info, setInfo] = useState([]);
  const [characterInfo, setCharacterInfo] = useState([]);
 
  const toggleShown = (title) => {
    const shownState = info.slice();
    const index = shownState.indexOf(title);
    if (index >= 0) {
      shownState.splice(index, 1);
      setInfo(shownState);
    } else {
      shownState.push(title);
      setInfo(shownState);
    }
  };
  const url = 'https://swapi.dev/api/films/?format=json';
  const {
    isLoading,
    badRequest,
    hasError,
    data,
    fetchApiArrayData,apiArrayData
    
  } = useFetch(url);


  

  return (
    <Container className='mt-5'>
      <Row>
        {isLoading && !hasError && <p className='loading'>Loading....</p>}
        {badRequest && !hasError && <p className='loading'>Bad Request</p>}
        {hasError && !isLoading && (
          <p className='error text-alert'>Something Went Wrong!</p>
        )}

        {data &&
          data.map((value) => {
            return (
              <>
                <Col lg='4' md='6' sm='6'>
                  <h3 className='mb-4 text-dark'>{value.title}</h3>
                </Col>
                <Col lg='2' md='4' sm='4'>
                  <Button
                    onClick={() => {
                      toggleShown(value.title);
                      fetchApiArrayData(value);
                    }}
                  >
                    {' '}
                    Show Details
                  </Button>
                </Col>

                {info.includes(value.title) && apiArrayData.length >= 0 && (
                  <InfoCard value={value} apiArrayData={apiArrayData} toggleShown={toggleShown} />
                )}
              </>
            );
          })}
      </Row>
    </Container>
  );
};

export default Home;
