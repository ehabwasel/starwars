import React from 'react';
import { Col, Card,Row ,Container} from 'react-bootstrap';

const InfoCard = ({ value,characterInfo }) => {
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
            {characterInfo.map(value=>{
              return(
                
                
    <Col xs={6} md={4}>
    <h6 className='mb-2 text-danger'>{` Character : ${value.name}`}</h6>
    </Col>
    
  
              
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
