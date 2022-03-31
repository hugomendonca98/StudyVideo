import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import Route from './routes';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  );
}
