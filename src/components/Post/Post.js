import React from 'react';
import { Link } from 'react-router-dom';

//  styles
import s from './styles/post.module.scss';

export const Post = ({ id, title, body, author, date }) => (
  <li className={s.post} key={id}>
    <h2 className={s.title}>{title}</h2>
    <div className={s.desc}>
      <p>{body}</p>
      <Link className={s.link} to={`/details/${id}`}>read more</Link>
    </div>
    <div className={s.info}>
      <p className={s.infoItem}>{author}</p>
      <p className={s.infoItem}>{date}</p>
    </div>
  </li>
);

export default Post;
