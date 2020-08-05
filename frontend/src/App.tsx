import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styleImports.css';
import _mainNav from './nav';
import _mainContent from './mainContent';
import _Footer from './Footer';
import _signInModal from './signInModal';

function App() {
  return (
    
    <div className="App">

      <_mainNav />
      <_signInModal/>
      <_mainContent />
      <_Footer />





      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;
