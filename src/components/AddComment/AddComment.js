import React from 'react';

// styles
import s from './styles/addNewComment.module.scss';

export const AddComment = ({
  addCommentValue,
  commentValue,
  postComment,
  match,
}) => (
  <div className={s.wrap}>
    <input
      className={s.input}
      onChange={e => addCommentValue(e.target.value)}
      onKeyUp={e =>
        e.keyCode === 13 && commentValue
          ? postComment(commentValue, match.params.id)
          : null
      }
      value={commentValue}
    />
    <button
      className={s.btn}
      type="button"
      onClick={() => postComment(commentValue, match.params.id)}
    >
      add comment
    </button>
  </div>
);

export default AddComment;
