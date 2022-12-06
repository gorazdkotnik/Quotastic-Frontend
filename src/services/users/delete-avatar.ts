import { request } from '../../helpers';

export const deleteAvatar = (token: string) => {
  return request('/me/avatar', {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
