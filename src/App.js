import react from 'react'
import Home from './components/Home';
import {Container} from 'react-bootstrap'
import Fetch from './components/Fetch';

function App() {
  
  return (
    <Container >
      <h1>Web Coding Challenge Star wars Films</h1>
      <h4 className='mb-4 text-info'> List of Films</h4>
     <Home/>
    
    </Container>
  );
}

export default App;
