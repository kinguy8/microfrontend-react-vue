import React, { lazy } from 'react';
import { Route, Switch, Link, } from 'react-router-dom';
import { Home } from './components/Home';

const VuePageLazy = lazy(() => import('./components/Test'));

export default () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>React</Link>
        </li>
        <li>
          <Link to='/vue'>Vue</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' component={<Home />} />
        <Route path='/vue' component={<VuePageLazy />} />
      </Switch>
    </div>
  );
};

