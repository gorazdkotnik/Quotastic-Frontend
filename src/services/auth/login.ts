import { request } from '../../helpers';

export const login = (email: string, password: string) => {
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
