import React from 'react';

const ErrorScreen = () => {
  return (
    <div className="error-container">
      <div className="error-modal">
        <p className="error-message">Access to suggestions denied due to age restriction:</p>
        <button onClick={() => window.location.reload()} className="back-button">Return to Login</button>
        <p className="additional-text-below">Please login to your account to confirm your date of birth.</p>
      </div>
    </div>
  );
};

export default ErrorScreen;
