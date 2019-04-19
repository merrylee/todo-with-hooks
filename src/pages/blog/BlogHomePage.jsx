import React, {useContext} from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'antd';
import { AuthContext } from '../../contexts/AuthContext';
import { BlogContext } from '../../contexts/BlogContext';
import { Link } from 'react-router-dom';

const Page = styled.div`
  .new-post-button {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    position: fixed;
    right: 10px;
    bottom: 10px;

    .ant-btn-primary {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

  }
`;

export default function BlogHomePage(props) {
  const { isAuthenticated } = useContext(AuthContext);
  const { posts } = useContext(BlogContext);

  function handleClick() {
    props.history.push('/blog/new-post');
  }

  return (
    <Page>
      <h2>블로그 홈 페이지 \^0^/</h2>

      <div>
        {posts.map(post => {
          return (
            <div>
              <Link to={`/blog/${post.id}`}>
              <div key={post.id}>{post.text}</div>
              </Link>
          </div>);
        })}
      </div>

      { isAuthenticated && (
        <div className="new-post-button">
          <Button type="primary" icon="plus" onClick={handleClick} />
        </div>
        )
      }
    </Page>
  );
}
