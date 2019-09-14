import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../Post/Post';

// styles
import s from './styles/postsList.module.scss';

export const PostsList = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <Link className={s.btn} to="/new">ADD POST</Link>
      <ul className={s.list}>
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
