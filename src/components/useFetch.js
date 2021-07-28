import { useState, useEffect } from 'react';


const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [badRequest, setBadRequest] = useState(false);
  const [data, setData] = useState();
  
  const [apiArrayData, setApiArrayData] = useState([]);
  

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      if (response.ok) {
       
        setData(result.results);
       
      } else {
        setBadRequest(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  
  };

  const fetchApiArrayData = async (value,property) => {
    try {
      setIsLoading(true);
      const response = await Promise.all(
        value[property].map((value) => fetch(value).then((res) => res.json()))
        
      );
      if(response.length >= 0){

        setApiArrayData(response);
      }
      
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);


  return { isLoading, badRequest, hasError, data ,fetchApiArrayData,apiArrayData,setIsLoading};
};


export default useFetch;
