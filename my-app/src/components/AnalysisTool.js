import React, { useState } from 'react';
import axios from 'axios';

function AnalysisTool() {
  const [newsText, setNewsText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = async () => {
    if (newsText.trim().length < 10) {
      alert('Please enter a longer article or valid URL for analysis.');
      return;
    }

    setAnalyzing(true);
    setResults(null);

    const response =await fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      credentials: "include",
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ text: newsText }),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Error analyzing the news article');
    }

    // Parse the response as JSON
    const data = await response.json();
    
    // This is just placeholder frontend logic
    // You'll replace this with your actual backend API call
    setTimeout(() => {
      // Sample result - will be replaced with actual backend response
      const trustScore = Math.floor(Math.random() * 100);
      const trustLevel = trustScore > 70 ? 'High' : trustScore > 40 ? 'Medium' : 'Low';
      const trustColor = trustScore > 70 ? '#22c55e' : trustScore > 40 ? '#f97316' : '#ef4444';
      
      // setResults({
      //   trustScore,
      //   trustLevel,
      //   trustColor,
      //   factors: [
      //     {
      //       name: 'Source credibility',
      //       value: trustScore > 50 ? 'Reputable source detected' : 'Source credibility issues'
      //     },
      //     {
      //       name: 'Factual consistency',
      //       value: trustScore > 60 ? 'Facts appear consistent' : 'Potential factual inconsistencies'
      //     },
      //     {
      //       name: 'Bias detection',
      //       value: trustScore > 70 ? 'Minimal bias detected' : 'Potential bias detected'
      //     },
      //     {
      //       name: 'Cross-reference',
      //       value: trustScore > 65 ? 'Content verified with other sources' : 'Limited cross-reference validation'
      //     }
      //   ]
      // });
      setResults({ message: data.prediction }); 
      setAnalyzing(false);
    }, 1500);
  };

  return (
    <section className="analysis-section" id="analysis">
      <div className="container">
        <h2 className="analysis-title">Analyze News Articles</h2>
        <div className="analysis-container">
          <div className="input-area">
            <label htmlFor="news-text">Paste news article or URL below:</label>
            <textarea 
              id="news-text" 
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
              placeholder="Paste the news article text or URL here..."
            />
          </div>
          <button  
            className="analyze-btn" 
            onClick={handleAnalyze}
            disabled={analyzing}
          >
            {analyzing ? 'Analyzing...' : 'Analyze Article'}
          </button>
          
          {/* {results && (
            <div className="results-area">
              <h3>Analysis Results</h3>
              
              <div className="trust-score-container">
                <div className="trust-score-header">
                  <span>Trust Score:</span>
                  <span style={{ color: results.trustColor }}>
                    {results.trustScore}% ({results.trustLevel} Reliability)
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${results.trustScore}%`,
                      backgroundColor: results.trustColor 
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="factors-container">
                <h4>Key Factors:</h4>
                <ul>
                  {results.factors.map((factor, index) => (
                    <li key={index}>
                      <strong>{factor.name}:</strong> {factor.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )} */}
          {results && (
            <div className="results-area">
            <h3>Analysis Results</h3>
            <p className="results-message">
                {results.message}
            </p>
          </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default AnalysisTool;
