import { API_URL } from '../constants';

export const request = (url: string, options: any = {}) => {
  return fetch(`${API_URL}${url}`, options)
    .then((response: any) => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then((data: any) => data);
};
