import React from 'react';
import {Button, Modal} from 'antd';
import './Counter.less';

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.count = 0;
    this.state = {
      visible: false,
      list: [1, 2, 3, 4, 5],
    };
  }

  handleClick = e => {
    this.setState({
      list: this.state.list.filter(item => {
        return item % 2 === 1;
      }),
    });
  };

  handleAddRandomNumber = () => {
    const {list} = this.state;
    let num = Math.random() * 1000;
    num = Math.ceil(num);

    this.setState({
      list: [...list, num],
    });
  };

  handleClickTenTimes = () => {
    this.count += 1;

    if (this.count === 10) {
      this.forceUpdate();
    }
  };

  render() {
    const {list} = this.state;

    return (
      <div className="Counter">
        <div className="this-count">
          <span>
            this.count = <strong>{this.count}</strong>
          </span>
        </div>

        <div className="this-list">
          <strong>[</strong>
          {list.map((item, idx) => {
            return (
              <>
                <span key={`list-item-${idx}`}>{item}</span>
                {list.length - 1 !== idx && <span className={'comma'}>,</span>}
              </>
            );
          })}
          <strong>]</strong>
        </div>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={() => this.setState({visible: false})}
          onCancel={() => this.setState({visible: false})}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

        <Button onClick={this.handleClickTenTimes}>
          10번 클릭 후에 forceUpdate
        </Button>
        <Button onClick={this.handleClick}>List 에서 짝수 제거</Button>
        <Button onClick={this.handleAddRandomNumber}>
          List 에 랜덤 숫자 추가
        </Button>

        <Button onClick={() => this.setState({visible: true})}>
          모달 띄우기
        </Button>
      </div>
    );
  }
}

export default Counter;
