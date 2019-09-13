import React from 'react';

export const Comment = ({ body, postId, id }) => (
  <li key={id} id={postId}>
    {body}
  </li>
);

export default Comment;
