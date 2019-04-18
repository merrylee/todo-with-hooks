import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.less';
import {Input, Button, Icon} from 'antd';

class TodoList extends React.Component {
  static defaultProps = {
    items: [
      {name: 'React 개발에 필요한 환경을 구축한다', completed: true},
      {name: '새로운 자바스크립트 문법을 익힌다.', completed: false},
      {name: '개발 편의를 위한 IntelliJ 환경을 만든다.', completed: false},
      {name: '기본적인 Git 사용법을 익힌다.', completed: true},
      {name: 'PR 코드 리뷰를 응용한 개발 프로세스를 익힌다', completed: false},
      {name: 'React 로 간단한 노트앱을 만들어본다.', completed: false},
    ],
  };

  handleTitleClick() {
    console.log('click', this);
  }

  render() {
    const {items} = this.props;

    return (
      <div className="TodoList">
        <div>
          <Input addonAfter={<Icon type="plus" />} />
        </div>

        <div>
          <Button>전체선택</Button>
        </div>

        <div>
          {items.map((item, index) => {
            return <TodoListItem key={`item-${index}`} {...item} />;
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
