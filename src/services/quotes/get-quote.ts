import { request } from '../../helpers';

export const getQuote = (id: number) => {
  return request(`/quotes/${id}`);
};
