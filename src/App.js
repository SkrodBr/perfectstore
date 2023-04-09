import './App.css';
import Header from './partials/Header';
import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout /> 
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
