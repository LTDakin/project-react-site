import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home'
import Navbar from './pages/myNav'
import History from './pages/History'
/**
 * Main App loading area, organize pages here, links from myNav are handled here, this is where the switch nav router goes
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <History />
    </div>
  );
}

export default App;
