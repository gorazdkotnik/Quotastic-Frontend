import { request, UpdatePasswordDto } from '../../helpers';

export const updatePassword = (
  { currentPassword, newPassword }: UpdatePasswordDto,
  token: string
) => {
  return request('/me/password', {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      currentPassword,
      newPassword,
    }),
  });
};
