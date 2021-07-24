import React from 'react';
import { useState } from 'react';
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
  const { isLoading, badRequest, hasError, data ,setIsLoading,setHasError,setBadRequest} = useFetch(url);
  console.log(data);
  const fetchCharactersData = async (value) => {
    try {
      setIsLoading(true);
      const response =  await Promise.all(value.characters.map(value=>fetch(value).then(res => res.json()))) ;
      
      if (response.length >=0) {
     
        setCharacterInfo(response)
      } else {
        setBadRequest(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
console.log(characterInfo)
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
                <Col lg='4' md ='6' sm='6'>
                  <h3 className='mb-4 text-dark'>{value.title}</h3>
                </Col>
                <Col lg='2' md='4' sm='4'>
                  <Button onClick={() =>{toggleShown(value.title)
                 fetchCharactersData(value) } } >
                    {' '}
                    Show Details
                  </Button>
                </Col>

                {info.includes(value.title) && <InfoCard value={value} characterInfo={characterInfo}/>}
              </>
            );
          })}
      </Row>
    </Container>
  );
};

export default Home;
