import React from 'react';
import {Checkbox, Input, Icon} from 'antd';

class TodoListItem extends React.Component {
  handleDelete = e => {
    e.stopPropagation();
    this.props.onDelete();
  };

  handleEdit = () => {
    this.setState({
      isEditable: true,
    });
  };

  handleSave = e => {
    console.log(e.target.value);
    this.props.onEdit(e.target.value);
    this.setState({
      isEditable: false,
    });
  };

  state = {
    isEditable: false,
  };

  render() {
    const {name, completed} = this.props;
    const {isEditable} = this.state;

    return (
      <div className="TodoListItem" onClick={this.handleEdit}>
        <div className="col-ck-box">
          <Checkbox checked={completed} onChange={this.props.onChangeSelect} />
        </div>
        <div className="col-content">
          {isEditable ? (
            <Input defaultValue={name} onPressEnter={this.handleSave} />
          ) : (
            <span>{name}</span>
          )}
        </div>
        <div className="col-cmd-box">
          {!isEditable && <Icon type={'edit'} className={'btn btn-edit'} />}
          {!isEditable && (
            <Icon
              type={'delete'}
              className={'btn btn-delete'}
              onClick={this.handleDelete}
            />
          )}
        </div>
      </div>
    );
  }
}

export default TodoListItem;
