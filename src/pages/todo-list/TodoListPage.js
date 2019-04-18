import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import { setTwoToneColor } from 'antd/lib/icon/twoTonePrimaryColor';

const Page = styled.div`
  min-height: 80vh;
  padding: 50px;

  .CreateTodo {
    margin-bottom: 20px;
  }
`;
// const Page = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 80vh;
// `;

function TodoListPage() {

    const todo = localStorage.getItem('todos');

    const initialState = () => {
      const todo = localStorage.getItem('todos' || []);

      return JSON.parse(todo);
    }

    const [items, setItems] = useState(initialState);

  // componentWillUnmount() {
  //   localStorage.setItem('todos', JSON.stringify(this.state.items));
  // }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));

  }, [items]);

  const handleSelectAll = () => {
    setItems(
      items.map(item => {
        item.completed = true;
        return item;
      }),
    );
  };

  const handleUnselectAll = () => {
    setItems(
      items.map(item => {
        item.completed = false;
        return item;
      }),
    );
  };

  const handleChangeComplete = (idx, item) => {
    items[idx] = item;
    setItems([...items]);
  };

  const handleEditItem = (index, value) => {
    items[index].name = value;
    // localStorage.setItem('todos', JSON.stringify(items));
    setItems([...items]);
  };

  const handleDeleteItem = index => {
    items.splice(index, 1);
    // localStorage.setItem('todos', JSON.stringify(items));
    setItems([...items]);
  };

  const handleAddItem = text => {
      const newItem = [...items, {name: text, completed: false}];
      setItems(newItem);
  };

    return (
      <Page>
        <TodoList
          items={items}
          onCreate={handleAddItem}
          onDelete={handleDeleteItem}
          onEdit={handleEditItem}
          onSelectAll={handleSelectAll}
          onUnselectAll={handleUnselectAll}
          onChangeComplete={handleChangeComplete}
        />
      </Page>
    );

}

export default TodoListPage;
