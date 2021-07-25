
import { useState, useEffect } from 'react';
import React from 'react';
import { Col, Card,Row ,Container,Button} from 'react-bootstrap';

const InfoCard = ({ value,characterInfo,vehiclesNames,toggleShown }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [badRequest, setBadRequest] = useState(false);
  const [starShip, setStarShip] = useState(false);
  const handleFetch =  (value)=>{
    console.log(value)
    // try {
    //   setIsLoading(true);
    //   // const response = await Promise.all(
    //   //   value1.starships.map((value) => fetch(value).then((res) => res.json()))
    //   // );
     
    //   // if (response.length >= 0) {
    //   //   setStarShip(response);
    //   // } else {
    //   //   setBadRequest(true);
    //   // }
    // } catch {
    //   setHasError(true);
    // } finally {
    //   setIsLoading(false);
    // }
  }
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
            <Card.Text className='mb-2 text-dark '>
              {` Opening story : ${value.opening_crawl}`}
            </Card.Text>
            <Container>
            <Row >
            { characterInfo.map(value=>{
              return(
                
               
               <>
    <Col xs={6} md={3} lg ={4}>
    <h6 className='mb-2 text-danger'>{` Character : ${value.name}`}</h6>
    <Button key={value.name} className='m-2 text-dark' onClick={()=> {handleFetch(value) ;toggleShown(value.name)}}>Display vehicles </Button>
    {/* <Button className='m-2 text-dark' onClick={value && handleFetch()}>Display species</Button> */}
    </Col>
    
     
    
    </>
   
  
              
              )
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
