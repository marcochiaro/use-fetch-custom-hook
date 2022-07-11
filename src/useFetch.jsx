/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    isLoading: true,
    error: false,
  });

  //New way of handling cancellation to subscription, CancelToken deprecated
  const controller = new AbortController();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url, {
        signal: controller.signal,
      });
      const data = await response.data;
      if (data) {
        setFetchedData({
          data: data.results ? data.results : data,
          isLoading: false,
          error: false,
        });
      }
    } catch (e) {
      if (axios.isCancel(e)) {
        console.log("Fetching data aborted", e);
      } else {
        console.log("error ocurred");
      }
      setFetchedData({
        data: [],
        isLoading: false,
        error: true,
      });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    //return hace referencia a componentDidUnmount
    // return () => controller.abort();
  }, [url, fetchData]);

  const { data, isLoading, error } = fetchedData;
  return { data, isLoading, error, fetchData };
};

export default useFetch;
