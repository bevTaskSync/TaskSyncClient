import React from 'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import { login } from '../utils/api';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm onLogin={login} />
      </header>
    </div>
  );
}

export default App
