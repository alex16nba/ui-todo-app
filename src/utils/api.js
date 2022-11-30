import axios from 'axios';

const baseRoute = process.env.REACT_APP_API_URL;

export function getHeaders() {
  const token = localStorage.getItem('access_token');
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = token;
  }

  return headers;
}

export const getApiRequest = async (endpoint, params, token) => {
  const url = `${baseRoute}${endpoint}`;
  const headers = getHeaders(token);

  return axios.get(
    url,
    {
      headers,
      params,
    },
  );
};

export const updateApiRequest = async (endpoint, data, token) => {
  const url = `${baseRoute}${endpoint}`;
  const headers = getHeaders(token);

  return axios.put(
    url,
    data,
    {
      headers,
    },
  );
};

export const postApiRequest = async (endpoint, data, token) => {
  const url = `${baseRoute}${endpoint}`;
  const headers = getHeaders(token);

  return axios.post(
    url,
    data,
    {
      headers,
    },
  );
};

export const deleteApiRequest = async (endpoint, token) => {
  const url = `${baseRoute}${endpoint}`;
  const headers = getHeaders(token);

  return axios.delete(
    url,
    {
      headers,
    },
  );
};
