import React from 'react';

let AuthContext;

const { Provider, Consumer } = ( AuthContext = React.createContext());

class AuthProvider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: localStorage.getItem('isLogin') === '1',
      authenticate: (cb) => {
        console.log('signin');
        this.setState({isAuthenticated: true });
        localStorage.setItem('isLogin', 1);
        setTimeout(cb, 1000); // fake async
      },
      signout: (cb) => {
        console.log('signout');
        this.setState({isAuthenticated: false });
        localStorage.setItem('isLogin', 0);
        setTimeout(cb, 1000);
      },
    };
  }

  render() {
    return <Provider value={this.state}> {this.props.children} </Provider>
  }

}

export { AuthProvider, AuthContext };
