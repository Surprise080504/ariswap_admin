import { toast } from 'react-toastify';
import axios from "axios";
let baseUrl = process.env.REACT_APP_BASE_URL;

export const axiosUpsertData = (url, body, isMultipart = false, method = 'post') => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
      },
    };

    url = baseUrl + url;

    axios[method](url, body, config).then(
      (res) => {
        const { data } = res
        if (data.success)
          toast.success(data.message)
        else
          toast.error(data.message)

        resolve(res.data)
      },
      (error) => {
        if (error.response && error.response.data) {
          const { data } = error.response
          if (data.message)
            toast.error(data.message)
        }
        resolve(error)
      },
    );
  });
};

export const axiosGetData = (url, qs = '') => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    url = baseUrl + url;

    // if (qs)
    // url += `?${qs}`

    axios.get(url, config).then(
      (res) => {
        const { data } = res
        if (data.success)
          toast.success(data.message)
        else
          toast.error(data.message)

        resolve(data.data)
      },
      (error) => {
        if (error.response && error.response.data) {
          const { data } = error.response
          if (data.message)
            toast.error(data.message)
        }

        resolve(error)
      },
    );
  });
};

export const axiosDeleteData = (url) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    url = baseUrl + url;

    axios.delete(url, config).then(
      (res) => {
        const { data } = res
        if (data.success)
          toast.success(data.message)
        else
          toast.error(data.message)

        resolve(data)
      },
      (error) => {
        if (error.response && error.response.data) {
          const { data } = error.response
          if (data.message)
            toast.error(data.message)
        }

        resolve(error)
      },
    );
  });
};