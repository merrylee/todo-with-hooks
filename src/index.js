import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import {AuthProvider} from './contexts/AuthContext';

/**
 * 화면을 그리기 전에 필요한 값을 로컬 저장소에서 불러온다.
 */

ReactDOM.render(
  <AuthProvider>
    <AppRouter />
  </AuthProvider>,
  document.getElementById('root')
);
