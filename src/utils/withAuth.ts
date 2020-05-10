import { getToken } from './storage';

export default function withAuth(AuthComponent: any) {
  if (getToken() === undefined) {
    location.href = '/signin';
  }

  return AuthComponent;
}
