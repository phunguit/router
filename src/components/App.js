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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className='Menu'>
            <NavLink exact to='/' className='list-group-item'>Home</NavLink> - 
            <NavLink to='/about' className='list-group-item'> About</NavLink>
            <NavLink to='/cource' className='list-group-item'> Cource</NavLink>
          </div>

          <div className="App-intro">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/cource' component={Cource} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;