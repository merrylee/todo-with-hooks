import React, { useContext } from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

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
  const { t, i18n } = useTranslation();

  return (
    <Nav>
      <NavLink exact to="/"> {t('Home')} </NavLink>
      <NavLink to="/todo-list/"> {t('Todos')} </NavLink>
      <NavLink to="/blog/"> {t('Blog')} </NavLink>
      <NavLink to="/guest/"> {t('Guest')} </NavLink>
      { isAuthenticated && (
            <LogoutMenu onClick={() => signout()}>
              <Link exact to={'/'}>로그아웃</Link>
            </LogoutMenu>
          )
      }
      <Button onClick={() => { i18n.changeLanguage('ko-KR') }} >한국어</Button>
      <Button onClick={() => { i18n.changeLanguage('en')  }}>English</Button>
    </Nav>
  );
};

export default Navigation;
