import { getApiRequest, postApiRequest } from '../utils/api';

export function userRegistration(data) {
  return postApiRequest('/register', data);
}

export function getLoggedUser() {
  return getApiRequest('/user/me');
}

export function userLogin(data) {
  return postApiRequest('/login', data);
}
