import { useState, useMemo } from 'react';
import { getToken } from '../utils/storage';

export default function useAuth() {
  const [isLogin, setIsLogin] = useState(useMemo(() => getToken(), []) ? true : false);

  return { isLogin, setIsLogin };
}
