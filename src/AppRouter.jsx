import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/login/LoginPage';
import TodoListPage from './pages/todo-list/TodoListPage';
import {AuthContext} from './contexts';
import './AppRouter.less';

const PrivateRoute = ({component: Component, ...rest}) => (
  <AuthContext.Consumer>
    {auth => (
      <Route
        {...rest}
        render={props =>
          auth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: {from: props.location},
              }}
            />
          )
        }
      />
    )}
  </AuthContext.Consumer>
);

const AppRouter = props => (
  <Router>
    <div className={'AppRouter'}>
      <Navigation {...props} />
      <Route path="/" exact component={IndexPage} />
      <Route path="/login/" component={AboutPage} />
      <PrivateRoute path="/todo-list/" component={TodoListPage} />
    </div>
  </Router>
);
export default AppRouter;
