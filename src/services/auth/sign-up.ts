import { request } from '../../helpers';

export const signUp = (
  email: string,
  firstName: string,
  lastName: string,
  password: string
) => {
  return request('/signup', {
    method: 'POST',
    body: JSON.stringify({
      email,
      firstName,
      lastName,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
