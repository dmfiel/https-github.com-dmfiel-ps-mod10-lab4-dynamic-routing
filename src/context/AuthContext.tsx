import React, { useState, type ReactNode } from 'react';

export const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => null,
  logout: () => null
});

function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  function login(): null {
    setIsAuthenticated(true);
    return null;
  }

  function logout(): null {
    setIsAuthenticated(false);
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
