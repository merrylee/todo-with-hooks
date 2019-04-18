import React, { useRef } from 'react';
import { Input, Icon } from 'antd';

export default function CreateTodo(props) {

  const { onCreate } = props;

  const inputRef = useRef();

  const handleEnterTodoText = e => {
    onCreate(e.target.value);
    inputRef.current.setState({
      value: '',
    });
  };

  return (
    <div>
      <Input
        ref={inputRef}
        onPressEnter={handleEnterTodoText}
        addonAfter={<Icon type="plus" />}
      />
    </div>
  );
}
