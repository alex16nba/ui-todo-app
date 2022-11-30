import axios from 'axios';

// const baseRoute = process.env.API_ENDPOINT;
console.log('process.env', process.env);
const baseRoute = 'http://localhost:4000';

export function getHeaders(token = null) {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
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
