import React from 'react';
import FeatureCard from './FeatureCard';

function Features() {
  const features = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Trusted Analysis",
      description: "Our AI-powered system analyzes multiple factors to verify news authenticity."
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Real-time Detection",
      description: "Get instant results about the credibility of news articles."
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L1.8 23l6.43-1.07a1.02 1.02 0 0 1 .64.08 10 10 0 0 0 12.82-15.88"></path>
          <path d="M13.33 17.33a6.67 6.67 0 0 1-10-.93"></path>
          <path d="M14.67 12c1.77-1.17 2.33-2.5 2.33-4"></path>
        </svg>
      ),
      title: "Stay Informed",
      description: "Make informed decisions with verified information."
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="feature-grid">
          {features.map(feature => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
