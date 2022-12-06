import { request, CreateQuoteDto } from '../../helpers';

export const postQuote = ({ content }: CreateQuoteDto, token: string) => {
  return request('/me/myquote', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  });
};
