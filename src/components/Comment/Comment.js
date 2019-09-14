import React from 'react';

// styles
import s from './styles/comment.module.scss';

export const Comment = ({ body, postId, id }) => (
  <li className={s.comment} key={id} id={postId}>
    {body}
  </li>
);

export default Comment;
