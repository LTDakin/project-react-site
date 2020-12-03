import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home'
import Navbar from './pages/myNav'
import History from './pages/History'
import ParadigmAndTyping from './pages/ParadigmAndTyping'
import ControlStructures from './pages/ControlStructures'
import Character from './pages/Character'
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
/**
 * Main App loading area, organize pages here, links from myNav are handled here, this is where the switch nav router goes
 * 
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/Chracteristics' component={Character} exact />
            <Route path='/History' component={History} exact />
            <Route path='/ParadigmAndTyping' component={ParadigmAndTyping} exact />
            <Route path='/ControlStructures' component={ControlStructures} exact />
            <Route path='/Other' component={Home} exact />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
