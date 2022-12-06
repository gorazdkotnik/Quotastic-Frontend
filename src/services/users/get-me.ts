import { request } from '../../helpers';

export const getMe = (token: string) => {
  return request('/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
