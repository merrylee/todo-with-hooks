import React, {Component} from 'react';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';

class App extends Component {
  render() {
    return (
      <div className="App" style={{textAlign: 'center', padding: 100}}>
        <UncontrolledForm />
        <ControlledForm />
      </div>
    );
  }
}

export default App;
