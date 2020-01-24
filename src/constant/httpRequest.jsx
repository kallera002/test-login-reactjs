import { useState, useCallback } from "react";
import axios from "axios";

import errorHandler409 from "../utils/errorHandler_409";
import errorHandler422 from "./../utils/errorHandler_422";

const HttpPostData = ({ url, headers, payload }) => {
  const [res, setRes] = useState({
    data: null,
    error: null,
    isLoading: false,
    status: false,
    conflig: null
  });
  const callAPIPost = useCallback(() => {
    async function PostData() {
      try {
        setRes(prevState => ({ ...prevState, isLoading: true }));
        axios
          .post(url, payload, headers)
          .then(res => {
            setRes({
              data: res.data.data,
              isLoading: false,
              error: null,
              conflig: null,
              status: true
            });
          })
          .catch(async error => {
            let errorList = {};
            let conflig = {};

            if (error.response.status === 422) {
              errorList = await errorHandler422(error.response.data);
            }

            if (
              error.response.status === 409 ||
              error.response.status === 401
            ) {
              conflig = await errorHandler409(error.response.data);
            }

            setRes({
              data: null,
              isLoading: false,
              error: errorList,
              conflig: conflig
            });
          });
      } catch (error) {
        setRes({ data: null, isLoading: false, error });
      }
    }

    if (payload !== "") {
      PostData();
    }
  }, [headers, payload, url]);

  return [res, callAPIPost];
};

export default HttpPostData;
