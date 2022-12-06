import { request, LoginUserDto } from '../../helpers';

export const login = ({ email, password }: LoginUserDto) => {
  return request('/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
