import {React,useContext} from 'react'
import { Card ,Button} from 'react-bootstrap';
import { ItemContext } from "./ItemsContext";
import {BrowserRouter as Router,Link} from "react-router-dom";

const FilmCard = () => {
    const [filmInfo, setIFilmInfo] = useContext(ItemContext);
  
    return (
        <div>
            {filmInfo.map(filmInfo=>
              <Card >
              <Card.Body>
                  <Card.Header ><h2>{filmInfo.title}</h2></Card.Header>
                <Card.Title className="m-4 text-alert"> {`Producer : ${filmInfo.producer}`}</Card.Title>
                <Card.Subtitle className="m-4 text-muted">{`Episode_NO : ${filmInfo.episode_id}`}</Card.Subtitle>
                <Card.Text className="mb-4 text-alert">
                 {`Opening_crawl : ${filmInfo.opening_crawl}`}
                </Card.Text>
                <Card.Footer className="mb-3 text-dark">{`Release Date : ${filmInfo.release_date}`}</Card.Footer>
               < Link to='/'><Button>Back to list</Button></Link>
              </Card.Body>
            </Card>
                )}
          
        </div>
    )
}

export default FilmCard
