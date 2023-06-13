import React from 'react';
import './App.css';
import Notes from './components/Notes/Notes';
import logo from './media/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="AppHeader">
        <img src={logo} alt="Logo" />
      </div>
      <main className="AppContent">
        <Notes />
      </main>
      <footer className="App-footer">
        <p>© 2023 UnityScripts App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
