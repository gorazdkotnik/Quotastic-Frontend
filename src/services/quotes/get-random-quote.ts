import { request } from '../../helpers';

export const getRandomQuote = () => {
  return request('/quotes/random');
};
