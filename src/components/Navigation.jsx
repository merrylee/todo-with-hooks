import React, { useContext } from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #efefef;
  background-color: #fefefe;

  a {
    &.active {
      border-bottom: 2px solid #239;
    }
  }
`;

const LogoutMenu = styled.div`
  padding-right: 20px;
`;

function Navigation() {
  const { isAuthenticated, signout } = useContext(AuthContext);

  return (
    <Nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/todo-list/">Todos</NavLink>
      <NavLink to="/blog/">Blog</NavLink>
      <NavLink to="/guest/">Guest</NavLink>
      { isAuthenticated && (
            <LogoutMenu onClick={() => signout()}>
              <Link exact to={'/'}>로그아웃</Link>
            </LogoutMenu>
          )
      }
    </Nav>
  );
};

export default Navigation;
