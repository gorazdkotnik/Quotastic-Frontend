import { request, Paginationable } from '../../helpers';

export const getQuotes = ({ take, skip }: Paginationable) => {
  return request(`/quotes?take=${take}&skip=${skip}`);
};
