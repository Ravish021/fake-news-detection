// src/components/Header.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Modal from './Modal';
import LoginForm from './LoginForm';

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { currentUser, signOut } = useAuth();

  const handleSignInClick = (e) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const handleSignOutClick = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Realify
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            {currentUser ? (
              <>
                <span className="user-welcome">Welcome, {currentUser.name}</span>
                <a href="#signout" className="btn" onClick={handleSignOutClick}>Sign Out</a>
              </>
            ) : (
              <a href="#signin" className="btn" onClick={handleSignInClick}>Sign In</a>
            )}
          </div>
        </nav>
      </div>

      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
        <LoginForm onClose={() => setShowLoginModal(false)} />
      </Modal>
    </header>
  );
}

export default Header;