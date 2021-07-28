import {React,useContext} from 'react'
import { Card ,Button} from 'react-bootstrap';
import { ItemContext } from "./ItemsContext";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const FilmCard = ({value}) => {
    const [items, setItems] = useContext(ItemContext);
    console.log(items)
    return (
        <div>
            {items.map(items=>
              <Card >
              <Card.Body>
                  <Card.Header ><h2>{items.title}</h2></Card.Header>
                <Card.Title className="m-4 text-alert"> {`Producer : ${items.producer}`}</Card.Title>
                <Card.Subtitle className="m-4 text-muted">{`Episode_NO : ${items.episode_id}`}</Card.Subtitle>
                <Card.Text className="mb-4 text-alert">
                 {`Opening_crawl : ${items.opening_crawl}`}
                </Card.Text>
                <Card.Footer className="mb-3 text-dark">{`Release Date : ${items.release_date}`}</Card.Footer>
               < Link to='/'><Button>Back to list</Button></Link>
              </Card.Body>
            </Card>
                )}
          
        </div>
    )
}

export default FilmCard
