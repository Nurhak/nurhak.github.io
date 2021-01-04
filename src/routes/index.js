import React, {useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Main from '../containers/Main';
import Login from '../containers/signin/Signin';
import Admin from '../containers/admin';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import JWTAuth from '../services/auth';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(JWTAuth.getAuthUser());
  }, [dispatch]);
  
  if (authUser && (location.pathname === '/signin')) {
    return <Redirect to={'/admin'} />;
  }

  return (
    <React.Fragment>
      <Switch>
        <RestrictedRoute path="/admin" component={Admin} />
        <Route path="/signin" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;