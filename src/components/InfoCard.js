
import React from 'react';
import CharInfo from './CharInfo'
import { Col, Card, Row, Container, Button } from 'react-bootstrap';

const InfoCard = ({ value, apiArrayData}) => {
  
 
  return (
    <div>
      <Col md={12} sm={12} lg={12}>
        <Card border='dark' bg='dark' text={'dark'} className='mb-4'>
          <Card.Body>
            <Card.Header className='mb-2 text-light p-3 '>
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
            
            <Row>
              {apiArrayData.map((value) => {
                return (
                  
                  <Col xs="6" md={4} lg ={4} thumbnail>
                    
                    <CharInfo value={value} />
                    
                  </Col>
                 
                );
              })}
            </Row>
            
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default InfoCard;

