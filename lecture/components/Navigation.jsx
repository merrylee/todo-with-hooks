import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';

const Navigation = ({auth}) => {
  console.log('Navigation', auth);

  return (
    <nav>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>

        {auth.isAuthenticated && (
          <Menu.Item>
            <Link to="/todo-list/">TodoList</Link>
          </Menu.Item>
        )}
      </Menu>
    </nav>
  );
};

export default Navigation;
