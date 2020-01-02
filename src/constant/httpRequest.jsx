import React, { useState, useCallback } from 'react';
import axios from 'axios';
const HttpPostData = ({ url, headers, payload }) => {
  console.log(1111);
  const [res, setRes] = useState({ data: null, error: null, isLoading: false });
  const callAPI = useCallback(() => {
    console.log(1);

    setRes(prevState => ({ ...prevState, isLoading: true }));
    axios
      .get(url, headers, payload)
      .then(res => {
        console.log(res);

        setRes({ data: res.data, isLoading: false, error: null });
      })
      .catch(error => {
        setRes({ data: null, isLoading: false, error });
      });
  }, [headers, payload, url]);

  return [res, callAPI];
};

export default HttpPostData;
