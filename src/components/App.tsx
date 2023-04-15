import React from 'react';
import './App.css';
import LoginForm from './LoginForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm onLogin={(username, password) => {
          throw new Error('Invalid username or password')
          console.log(`username: ${username} password: ${password}`)

        }} />
      </header>
    </div>
  );
}

export default App
