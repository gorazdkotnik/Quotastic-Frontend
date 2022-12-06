import { request } from '../../helpers';

export const downvoteQuote = (id: number, token: string) => {
  request(`/quotes/${id}/downvote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
