import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import FilmCard from './components/FilmCard';
import { ItemProvider } from './components/ItemsContext';
function App() {
  return (
    <Router>
      <Container>
        <h1>Web Coding Challenge Star wars Films</h1>
        <Switch>
          <ItemProvider>
            <Route exact path='/'>
              <SearchBar placeholder='Write Character name at Least 3 characters......' />
              <h4 className='mb-4 text-info'> List of Films</h4>

              <Home />
            </Route>
            <Route exact path='/films'>
              <FilmCard />
            </Route>
          </ItemProvider>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
