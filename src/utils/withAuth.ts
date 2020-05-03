export default function withAuth(AuthComponent: any) {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      location.href = '/signin';
    }
  }

  return AuthComponent;
}
