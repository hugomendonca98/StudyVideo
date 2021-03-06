import { Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import Dashboard from '@/pages/Dashboard';
import CreateCategory from '@/pages/CreateCategory';
import CreateCourse from '@/pages/CreateCourse';
import Course from '@/pages/Course';
import EditCourse from '@/pages/EditCourse';
import CreateLesson from '@/pages/CreateLesson';
import Categories from '@/pages/categories';
import SignUp from '@/pages/SignUp';
import Route from './routes';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/entrar" component={SignIn} />
      <Route path="/criar-conta" component={SignUp} />

      <Route path="/painel" component={Dashboard} isPrivate />
      <Route path="/criar-categoria" component={CreateCategory} isPrivate />
      <Route path="/categorias" component={Categories} isPrivate />
      <Route path="/criar-curso" component={CreateCourse} isPrivate />
      <Route path="/curso/:id" component={Course} isPrivate />
      <Route path="/editar-curso/:id" component={EditCourse} isPrivate />
      <Route path="/criar-aula/:id" component={CreateLesson} isPrivate />
    </Switch>
  );
}
