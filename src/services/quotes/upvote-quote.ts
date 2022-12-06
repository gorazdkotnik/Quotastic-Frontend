import { request } from '../../helpers';

export const upvoteQuote = (id: number, token: string) => {
  request(`/quotes/${id}/upvote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
