// LoginModal.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import classes from './LoginModal.module.css'
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(email, password);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={classes.modalContainer}>
      <button onClick={onClose} className={classes.closeButton}>Close</button>
      <h2 className={classes.modalTitle}>Welcome</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={classes.modalInput}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={classes.modalInput}
      />
      <button onClick={handleLogin} className={classes.modalButton}>Login</button>

    </Modal>
  );
};

export default LoginModal;
