import React, { useContext } from'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/login/LoginPage';
import BlogHomePage from './pages/blog/BlogHomePage';
import BlogDetailPage from './pages/blog/BlogDetailPage';
import BlogPostPage from './pages/blog/BlogPostPage';
import GuestHomePage from './pages/guest/GuestHomePage';
import TodoListPage from './pages/todo-list/TodoListPage';
import {AuthContext} from './contexts/AuthContext';
import './AppRouter.less';



const PrivateRoute = ({component: Component, ...rest}) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
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
  );
};

const AppRouter = props => (
  <Router>
    <div className={'AppRouter'}>
      <Navigation {...props} />
      <Route path="/" exact component={IndexPage} />
      <Route path="/login/" component={AboutPage} />
      <PrivateRoute path="/todo-list/" component={TodoListPage} />
      <Route path="/blog/" component={BlogHomePage} />
      <Switch>
        <PrivateRoute path="/blog/:title" component={BlogDetailPage} />
        <Route path="/blog/new-post" component={BlogPostPage} />
        <Route path="/guest/" component={GuestHomePage} />
      </Switch>
    </div>
  </Router>
);
export default AppRouter;
