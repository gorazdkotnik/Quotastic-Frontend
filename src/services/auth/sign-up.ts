import { request, CreateUserDto } from '../../helpers';

export const signUp = ({
  email,
  firstName,
  lastName,
  password,
}: CreateUserDto) => {
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
