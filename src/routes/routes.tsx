import React from 'react';
import PropTypes from 'prop-types';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

function Route({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps): JSX.Element {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/painel',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

Route.prototypes = {
  isPrivate: PropTypes.bool,
};

Route.defaultProps = {
  isPrivate: false,
};

export default Route;
