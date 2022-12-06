import { request, Paginationable } from '../../helpers/';

export const getLikedQuotes = (
  { take, skip }: Paginationable,
  token: string
) => {
  return request(`/quotes/liked?take=${take}&skip=${skip}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
