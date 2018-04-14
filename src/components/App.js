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

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/about',
    exact: true,
    main: () => <About />
  },
  {
    path: '/cource',
    exact: false,
    main: ({ match }) => <Cource match={ match } />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  }
];

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