import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart.js';

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
