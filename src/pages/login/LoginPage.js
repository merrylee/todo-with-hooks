import React, { useContext } from 'react';
import styled from 'styled-components';
import {Button} from 'antd';
import { AuthContext } from '../../contexts/AuthContext';

const Page = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
  align-items: center;
`;

export default function LoginPage(props) {

  const { authenticate } = useContext(AuthContext);

  return (
      <Page>
        <div>아래 버튼을 로그인 하세요!</div>
        <div>
          <Button
            type={'primary'}
            onClick={() =>
              authenticate(() => {
                console.log('로그인 완료!', props);

                props.history.replace('/todo-list');
              })
            }>
            로그인
          </Button>
        </div>
      </Page>
    );
}
