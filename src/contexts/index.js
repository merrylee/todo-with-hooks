import React from 'react';

export const AuthContext = React.createContext({
  auth: {
    isAuthenticated: false,
  },
});

export const auth = {
  isAuthenticated: localStorage.getItem('isLogin') === '1',
  authenticate(cb) {
    this.isAuthenticated = true;
    localStorage.setItem('isLogin', 1);
    setTimeout(cb, 10000); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    localStorage.setItem('isLogin', 0);
    setTimeout(cb, 10000);
  },
};
