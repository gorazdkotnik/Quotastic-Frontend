import { API_URL } from '../../constants';

export const getAvatar = (imageName: string) => {
  return `${API_URL}/me/avatar/${imageName}`;
};
