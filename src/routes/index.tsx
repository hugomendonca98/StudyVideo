import { Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import Dashboard from '@/pages/Dashboard';
import CreateCategory from '@/pages/CreateCategory';
import CreateCourse from '@/pages/CreateCourse';
import Route from './routes';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/entrar" component={SignIn} />

      <Route path="/painel" component={Dashboard} isPrivate />
      <Route path="/criar-categoria" component={CreateCategory} isPrivate />
      <Route path="/criar-curso" component={CreateCourse} isPrivate />
    </Switch>
  );
}
