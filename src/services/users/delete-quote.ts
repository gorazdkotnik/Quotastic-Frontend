import { request } from '../../helpers';

export const deleteQuote = (id: number, token: string) => {
  return request(`/me/myquote/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
