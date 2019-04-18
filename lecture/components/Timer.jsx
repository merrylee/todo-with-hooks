import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import './Timer.less';

moment.locale('ko');

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mtNow: moment(),
    };
  }

  checkExpired() {
    console.log('checkExpired', this);

    const {expireDate} = this.props;
    const {mtNow} = this.state;
    const mtExpire = moment(expireDate);

    return mtExpire < mtNow;
  }

  componentDidMount() {
    if (!this.checkExpired()) {
      this.nTimer = setInterval(() => {
        this.setState({
          mtNow: moment(),
        });
      }, 1000);
    }
  }

  componentDidUpdate() {
    console.log('componentDidUpdate:.,..');

    if (this.checkExpired()) {
      clearInterval(this.nTimer);
    }
  }

  render() {
    const {expireDate, onExpired} = this.props;
    const {mtNow} = this.state;
    const mtExpire = moment(expireDate);

    const isExpired = mtExpire < mtNow;

    console.log(onExpired('hhhh'));

    return (
      <div className="Timer">
        <div className={'current'}>현재시간은 {mtNow.format('A h:mm:ss')}</div>

        {isExpired ? (
          <div>종료 되었습니다.</div>
        ) : (
          <>
            <div>{mtExpire.fromNow()}에 강의를 종료합니다</div>
            <div>hhhh</div>
          </>
        )}
      </div>
    );
  }
}

export default Timer;
