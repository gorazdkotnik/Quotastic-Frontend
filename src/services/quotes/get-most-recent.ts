import { request, Paginationable } from '../../helpers';

export const getMostRecent = ({ take, skip }: Paginationable) => {
  return request(`/quotes/most-recent?take=${take}&skip=${skip}`);
};
