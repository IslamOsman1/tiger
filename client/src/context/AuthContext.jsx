import { createContext, useContext, useMemo, useState } from 'react';
import api from '../api/client.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('tiger_admin_token'));
  const [admin, setAdmin] = useState(() => {
    const saved = localStorage.getItem('tiger_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email, password) => {
    const { data } = await api.post('/api/auth/login', { email, password });
    localStorage.setItem('tiger_admin_token', data.token);
    localStorage.setItem('tiger_admin_user', JSON.stringify(data.admin));
    setToken(data.token);
    setAdmin(data.admin);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('tiger_admin_token');
    localStorage.removeItem('tiger_admin_user');
    setToken(null);
    setAdmin(null);
  };

  const value = useMemo(() => ({ token, admin, isAuthenticated: Boolean(token), login, logout }), [token, admin]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
