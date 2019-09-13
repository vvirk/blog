import React from 'react';
import { Post } from '../Post/Post';

export const PostsList = props => {
  const { posts } = props;
  console.log(posts);
  return (
    <div>
      <ul>
        {posts
          ? posts.map(post => (
              <Post
                id={post.id}
                title={post.title}
                body={post.body}
                author={post.author}
                data={post.data}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default PostsList;
