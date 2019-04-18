import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {AuthContext} from '../contexts';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #efefef;
  background-color: #fefefe;
`;

const LogoutMenu = styled.div`
  padding-right: 20px;
`;

const Navigation = ({auth}) => {
  return (
    <Nav>
      <Link to="/">Home</Link>

      <AuthContext.Consumer>
        {auth =>
          auth.isAuthenticated && (
            <LogoutMenu onClick={() => auth.signout()}>
              <Link to={'/'}>로그아웃</Link>
            </LogoutMenu>
          )
        }
      </AuthContext.Consumer>
    </Nav>
  );
};

export default Navigation;
