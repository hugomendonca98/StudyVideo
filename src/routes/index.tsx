import { Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import Dashboard from '@/pages/Dashboard';
import Route from './routes';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
