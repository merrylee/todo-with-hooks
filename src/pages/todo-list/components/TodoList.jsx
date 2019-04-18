import React, { useRef } from 'react';
import TodoListItem from './TodoListItem';
import {Input, Button, Icon} from 'antd';
import PropTypes from 'prop-types';
import StyledTodoList from './StyledTodoList.styled';

function TodoList(props) {

  const { items, onDelete, onCreate, onChangeComplete, onEdit, onUnselectAll, onSelectAll } = props;

  const inputRef = useRef();
  const isSelectedAll = items.every(({completed}) => completed);

  const handleEnterTodoText = e => {
    onCreate(e.target.value);
    inputRef.current.setState({
      value: '',
    });
  };

  const handleChangeComplteItem = (item, index, value) => {
    item.completed = value;
    onChangeComplete(index, item);
  };

    return (
      <StyledTodoList className="TodoList">
        <div>
          <Input
            // ref={this.input}
            onPressEnter={handleEnterTodoText}
            addonAfter={<Icon type="plus" />}
          />
        </div>

        <div>
          {items.map((item, index) => {
            return (
              <TodoListItem
                key={`item-${index}`}
                {...item}
                onDelete={e => onDelete(index)}
                onEdit={value => onEdit(index, value)}
                onChangeSelect={e =>
                  handleChangeComplteItem(item, index, e.target.checked)
                }
              />
            );
          })}
        </div>

        <div className={'footer'}>
          {isSelectedAll ? (
            <Button onClick={onUnselectAll}>선택해제</Button>
          ) : (
            <Button onClick={onSelectAll}>전체선택</Button>
          )}

          <div>
            <span>할일 {items.filter(item => !item.completed).length}</span>
            <span>완료 {items.filter(item => item.completed).length}</span>
          </div>
        </div>
      </StyledTodoList>
    );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  onUnselectAll: PropTypes.func,
};

// TodoList.defaultProps = {
//   items: []
// };

export default TodoList;
