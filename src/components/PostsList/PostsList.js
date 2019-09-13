import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../Post/Post';

export const PostsList = ({ posts }) => {
  return (
    <div>
      <Link to="/new">ADD POST</Link>
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
