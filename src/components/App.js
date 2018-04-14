import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { 
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Cource from './Cource';
import Menu from './Menu';

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
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route path='/cource' component={Cource} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;