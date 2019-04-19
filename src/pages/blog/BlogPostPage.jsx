import React, {useRef, useContext} from 'react';
import { Input, Button, message } from 'antd';
import styled from 'styled-components';
import { BlogContext } from '../../contexts/BlogContext';
import { configConsumerProps } from 'antd/lib/config-provider';

const Page = styled.div`
  padding: 30px;

  .btn-area {
    padding: 10px 0;
    text-align: right;
  }
`;




export default function BlogPostPage(props) {

  console.log('BlogPostPage!')
  const textRef = useRef();
  const { onAddPost } = useContext(BlogContext);
  console.log(textRef, onAddPost);

  function handlePost() {
    const content = textRef.current.value;

    if(!content) { message.info('빈글입니다.'); }

    console.log('서버로 전송!!', content);
    onAddPost(content, result => {
      if(result) {
        props.history.replace('/blog/');
      }
    });
  }

  return (
    <Page>
      <h2>블로그 글쓰기 페이지 =.=+</h2>
      {/* <Input /> */}
      {/* <Input.Textarea ref={textRef} autosize={{minRows: 10, maxRows: 20}} /> */}
      <textarea ref={textRef} />
      <div className="btn-area">
      {console.log('OTL2....')}
        <Button type="primary" onClick={handlePost}>글쓰기</Button>
      </div>
    </Page>
  );

}
