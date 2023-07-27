import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom'; // Make sure to import Routes
import './App.css';
import Home from './components/home';
import Calculator from './components/Calculator';
import Quote from './components/quote';
import magicianImage from './styles/magician.png';

const App = () => (
  <Router>
    <div className="App">
      <div className="heading">
        <img src={magicianImage} alt="Math Magician" />
        <h1 className="home-h1">Math Magician</h1>
      </div>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <NavLink to="/">Home |</NavLink>
        <NavLink to="/calculator">Calculator |</NavLink>
        <NavLink to="/quote">Quote</NavLink>
      </nav>

      <Routes>
        {' '}
        {/* Use Routes instead of Route */}
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>
);

export default App;
