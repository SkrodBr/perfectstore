import './App.css';
import Header from './partials/Header';
import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from './pages/ProductPage';
import  Login  from './pages/Login';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout /> 
          </Route>
          <Route path="/product">
          <Header />
            <ProductPage />
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
