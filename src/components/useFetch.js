import { useState, useEffect } from 'react';


const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [badRequest, setBadRequest] = useState(false);
  const [data, setData] = useState();
  
  

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

  
  useEffect(() => {
    fetchData();
  }, [url]);


  return { isLoading, badRequest, hasError, data ,setIsLoading};
};


export default useFetch;
