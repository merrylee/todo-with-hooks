import React, { useContext } from 'react';
import { BlogContext } from '../../contexts/BlogContext';

export default function BlogDetailPage(props) {

  const {
    params: {postId},
  } = props.match;

  const {posts} = useContext(BlogContext);
  console.log('id', postId, posts);

  const ids = posts.map(({ id }) => id);

  console.log('ids', ids, ids.includes(postId - 0));

  let idBool = ids.includes(postId - 0);
  if( !idBool) {
    props.history.replace('/blog');
  }

  return <div>블로그 상세 페이지 ㅇㅅㅇ</div>
}
