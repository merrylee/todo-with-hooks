import React from 'react';
import styled from 'styled-components';
import {Button} from 'antd';
import {auth} from '../../contexts';

const Page = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  align-items: center;
`;

class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('LoginPage', props);
  }

  render() {
    return (
      <Page>
        <div>아래 버튼을 로그인 하세요!</div>
        <div>
          <Button
            type={'primary'}
            onClick={() =>
              auth.authenticate(() => {
                console.log('로그인 완료!', this.props);

                this.props.history.replace('/todo-list');
              })
            }>
            로그인
          </Button>
        </div>
      </Page>
    );
  }
}
export default LoginPage;
