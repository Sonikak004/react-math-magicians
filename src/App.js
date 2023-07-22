import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import QuoteComponent from './components/QuoteComponent';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <QuoteComponent />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
