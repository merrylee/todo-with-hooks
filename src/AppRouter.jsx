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

import { BlogProvider, BlogContext } from './contexts/BlogContext';

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
      <BlogProvider>
        <Route path="/blog" exact component={BlogHomePage} />
        <Switch>
          <PrivateRoute path="/blog/new-post" exact component={BlogPostPage} />
          <Route path="/blog/:postId" exact component={BlogDetailPage} />
        </Switch>
      </BlogProvider>
      <Route path="/login" component={AboutPage} />
      <Route path="/guest" component={GuestHomePage} />
      {/* <TodoProvider> */}
      <PrivateRoute path="/todo-list" component={TodoListPage} />
      {/* </TodoProvider> */}
    </div>
  </Router>
);
export default AppRouter;
