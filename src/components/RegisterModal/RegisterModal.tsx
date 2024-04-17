// Import React and useState
import React, { useState } from 'react';
// Import Modal component from 'react-modal'
import Modal from 'react-modal';
// Import CSS module for styling
import classes from './RegisterModal.module.css';

// Define Props interface
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onReg: (email: string, password: string) => void;
}

// Define RegModal functional component
const RegModal: React.FC<Props> = ({ isOpen, onClose, onReg }) => {
  // State variables for email, password, confirm password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Handle registration function
  const handleReg = () => {
    // Basic validation checks
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Call onReg function with email and password if validation passes
    onReg(email, password);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={classes.modalContainer}>
      {/* Close button */}
      <button onClick={onClose} className={classes.closeButton}>Close</button>
      {/* Modal title */}
      <h2 className={classes.modalTitle}>Hi! Kindly Register</h2>
      {/* Error message display */}
      {error && <div className={classes.error}>{error}</div>}
      {/* Email input field */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={classes.modalInput}
      />
      {/* Password input field */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={classes.modalInput}
      />
      {/* Confirm Password input field */}
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={classes.modalInput}
      />
      {/* Register button */}
      <button onClick={handleReg} className={classes.modalButton}>Register</button>
    </Modal>
  );
};

// Export RegModal component
export default RegModal;
