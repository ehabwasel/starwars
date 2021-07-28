import { useContext } from 'react';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ItemContext } from './ItemsContext';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import fetch from './Fetch';

const CharInfo = ({ value }) => {
  const [filmInfo, setIFilmInfo]= useContext(ItemContext);

  const { isLoading, badRequest, hasError, apiArrayData, fetchApiArrayData } =
    fetch();

  const handleFilm = (e) => {
    if (apiArrayData.length >= 0) {
      const filmObj = e.target.innerHTML;
      const result = apiArrayData.filter((value) =>
        value ? value.title === filmObj : <p>Loading ....</p>
      );

      setIFilmInfo(result);
    }
  };

  useEffect(() => {
    fetchApiArrayData(value, 'films');
  }, [value]);

  return (
    <div>
      {isLoading && !hasError && (
        <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
      )}
      {badRequest && !hasError && <p className='loading'>Bad Request</p>}
      {hasError && !isLoading && (
        <p className='error text-alert'>Something Went Wrong!</p>
      )}
      {value && (
        <ListGroup className='list-group-flush mb-3'>
          <ListGroup.Item>{`Name : ${value.name}`}</ListGroup.Item>

          <ListGroup.Item>
            Films :
            {apiArrayData.length ? (
              apiArrayData.map((value, index) => (
                <Link to='/films'>
                  <p onClick={handleFilm}>{value.title}</p>
                </Link>
              ))
            ) : (
              <a>No films </a>
            )}
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default CharInfo;
