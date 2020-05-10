export function getToken() {
  return typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
}

export function setToken(accessToken: string, refreshToken: string) {
  if (typeof window === 'undefined') {
    return null;
  }

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
}

export function removeToken() {
  if (typeof window === 'undefined') {
    return null;
  }

  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}
