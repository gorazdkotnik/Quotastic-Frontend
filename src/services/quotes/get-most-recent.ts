import { request } from '../../helpers';

export const getMostRecent = (take: number, skip: number) => {
  return request(`/quotes/most-recent?take=${take}&skip=${skip}`);
};
