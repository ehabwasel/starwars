
import { useState } from 'react';
const Fetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [badRequest, setBadRequest] = useState(false);
  const [apiArrayData, setApiArrayData] = useState([]);
  const fetchApiArrayData = async (value, property) => {
    try {
      setIsLoading(true);
      const response = await Promise.all(
        value[property].map((value) => fetch(value).then((res) => res.json()))
      );
      if (response.length >= 0) {
        setApiArrayData(response);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    badRequest,
    hasError,
    apiArrayData,
    setIsLoading,
    fetchApiArrayData,
    setHasError,
  };
};

export default Fetch;
