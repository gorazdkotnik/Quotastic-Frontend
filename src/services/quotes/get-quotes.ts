import { request } from '../../helpers';

export const getQuotes = (take: number, skip: number) => {
  return request(`/quotes?take=${take}&skip=${skip}`);
};
