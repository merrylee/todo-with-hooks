import React from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

class TodoListPage extends React.Component {
  constructor(props) {
    super(props);

    const todo = localStorage.getItem('todos');

    this.state = {
      items: JSON.parse(todo) || [],
    };

    this.headerRef = React.createRef();
  }
  componentWillUnmount() {
    localStorage.setItem('todos', JSON.stringify(this.state.items));
  }

  handleSelectAll = () => {
    const {items} = this.state;

    this.setState({
      items: items.map(item => {
        item.completed = true;
        return item;
      }),
    });
  };

  handleUnselectAll = () => {
    const {items} = this.state;

    this.setState({
      items: items.map(item => {
        item.completed = false;
        return item;
      }),
    });
  };

  handleChangeComplete = (idx, item) => {
    const {items} = this.state;
    items[idx] = item;

    this.setState({
      items: [...items],
    });
  };

  handleEditItem = (index, value) => {
    const {items} = this.state;
    items[index].name = value;

    localStorage.setItem('todos', JSON.stringify(items));

    this.setState({
      items: [...items],
    });
  };

  handleDeleteItem = index => {
    const {items} = this.state;
    items.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(items));

    this.setState({
      items: [...items],
    });
  };

  handleAddItem = text => {
    this.setState(prevState => {
      const items = [...prevState.items, {name: text, completed: false}];

      localStorage.setItem('todos', JSON.stringify(items));
      return {
        items,
      };
    });
  };
  render() {
    return (
      <Page>
        <TodoList
          items={this.state.items}
          onCreate={this.handleAddItem}
          onDelete={this.handleDeleteItem}
          onEdit={this.handleEditItem}
          onSelectAll={this.handleSelectAll}
          onUnselectAll={this.handleUnselectAll}
          onChangeComplete={this.handleChangeComplete}
        />
      </Page>
    );
  }
}

export default TodoListPage;
