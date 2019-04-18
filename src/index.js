import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import {auth, AuthContext} from './contexts';

/**
 * 화면을 그리기 전에 필요한 값을 로컬 저장소에서 불러온다.
 */

ReactDOM.render(
  <AuthContext.Provider value={auth}>
    <AppRouter />
  </AuthContext.Provider>,
  document.getElementById('root')
);
