import React from 'react';

class ControlledForm extends React.Component {
  value = '';

  handleSubmit = event => {
    alert('A name was submitted: ' + this.value);
    event.preventDefault();
  };

  handleChange = ({target}) => {
    this.value = target.value;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ControlledForm;
