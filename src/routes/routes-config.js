import React from 'react';

import Home       from '../components/Home';
import About      from '../components/About';
import NotFound   from '../components/NotFound';
import Cource     from '../components/Cource';
import LeaveMe    from '../components/LeaveMe';

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
    path: '/leave',
    exact: true,
    main: () => <LeaveMe />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  }
  
];

export default routes;