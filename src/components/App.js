import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Menu from './Menu';
import routes from '../routes/routes-config';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Menu />
          
          <div className="App-intro">
            <Switch>{ this.getNavMenu(routes) }</Switch>
          </div>
        </div>
      </Router>
    );
  }

  getNavMenu(routes) {
    return routes.map((item, index) => {
      return (
        <Route key={index} exact={ item.exact } path={ item.path } component={ item.main } />
      )
    });
  }
}

export default App;