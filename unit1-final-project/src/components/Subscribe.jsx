import Copyright from './Copyright';
import Button from './Button';
import Header from './Header';
import { useState } from 'react';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload

    // Check
    if (!email) {
      setMessage('Please enter your email');
      return;
    } 
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email');
      return;
    }

    // Success
    setMessage(`Subscribed successfully with ${email}!`);
    setEmail('');
  };

  return (
    <div className="subscribe">
      <Header title="Subscribe to Us!" />
      <p>Get the latest updates about attractions and events in STL!</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // updates state as user types
        />
        <Button label="Subscribe" className="subscribe-button" />
      </form>

      {/* Feedback message */}
      {message && <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}

      <Copyright />
    </div>
  );
}

export default Subscribe;