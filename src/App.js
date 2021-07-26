import react from 'react'
import Home from './components/Home';
import {Container} from 'react-bootstrap'
import Fetch from './components/Fetch';
import Data from './MOCK_DATA.json'
import SearchBar from './components/SearchBar'
function App() {
  
  return (
    <Container >
      <h1>Web Coding Challenge Star wars Films</h1>
      <SearchBar placeholder ='Write Character name ......' data ={Data}/> 
      <h4 className='mb-4 text-info'> List of Films</h4>
      
     <Home/>
    
    </Container>
  );
}

export default App;
