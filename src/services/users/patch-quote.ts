import { request, CreateQuoteDto } from '../../helpers';

export const patchQuote = (
  id: number,
  { content }: CreateQuoteDto,
  token: string
) => {
  return request(`/me/myquote/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  });
};
