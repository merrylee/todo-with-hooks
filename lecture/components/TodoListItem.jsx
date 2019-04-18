import React from 'react';
import {Checkbox, Icon} from 'antd';

class TodoListItem extends React.Component {
  render() {
    const {name, completed} = this.props;

    return (
      <div className="TodoListItem">
        <Checkbox checked={completed} />
        <span>{name}</span>

        <Icon type={'edit'} />
        <Icon type={'delete'} className={'btn-delete'} />
      </div>
    );
  }
}

export default TodoListItem;
