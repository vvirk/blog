import React from 'react';
import { Link } from 'react-router-dom';

//  styles
import s from './styles/post.module.scss';

export const Post = ({ id, title, body, author, data }) => (
  <li className={s.post} key={id}>
    <p>{title}</p>
    <p>{body}</p>
    <p>{author}</p>
    <p>{data}</p>
    <Link to={`/details/${id}`}>read more</Link>
  </li>
);

export default Post;
