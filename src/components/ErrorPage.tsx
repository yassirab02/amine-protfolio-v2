import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
  };
  const errorCodeStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#dc3545',
    marginBottom: '1rem',
  };

  const errorMessageStyle = {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#212529',
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    color: '#6c757d',
    maxWidth: '600px',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={containerStyle} role="alert">
      <h1 style={errorCodeStyle}>404</h1>
      <h2 style={errorMessageStyle}>An unexpected error occurred</h2>
      <p style={descriptionStyle}>
        Oops! It seems like the page you're looking for doesn't exist or might have been moved.
      <h1 className="error-code">404</h1>
      </p>
      <button 
        style={buttonStyle}
        onClick={handleGoHome}
        onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#007bff'}
      >
        Go Back to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;