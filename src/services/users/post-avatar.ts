import { request } from '../../helpers';

export const postAvatar = (formData: FormData, token: string) => {
  return request('/me/avatar', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
};
