import React from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import Features from './components/Features';
import AnalysisTool from './components/AnalysisTool';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="scrollable-view">
        <Header />
        <main>
          <Hero />
          <div className="divider"></div>
          <Features />
          <AnalysisTool />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;