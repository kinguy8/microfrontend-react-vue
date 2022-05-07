import React, { lazy, Suspense } from 'react';

import { Home } from './components/Home';
import { Loading } from './components/Loading';
import Routes from './routes';

const VuePageLazy = lazy(() => import('./components/Test'));

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Home/>
      <hr />
      <VuePageLazy />
    </Suspense>

  );
};