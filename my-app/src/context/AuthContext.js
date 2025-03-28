// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component that wraps your app and makes auth object available to any child component that calls useAuth()
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to handle sign in
  const signIn = async (email, password) => {
    // This is where you would normally connect to a backend API
    // For now, we'll simulate authentication with localStorage
    try {
      // Simulate API call
      if (email && password) {
        // For demo purposes, any non-empty email/password will "work"
        const user = { email, name: email.split('@')[0] };
        localStorage.setItem('user', JSON.stringify(user));
        setCurrentUser(user);
        return user;
      }
      throw new Error('Invalid credentials');
    } catch (error) {
      throw error;
    }
  };

  // Function to handle sign out
  const signOut = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  // Check if there's a user in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    signIn,
    signOut,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}