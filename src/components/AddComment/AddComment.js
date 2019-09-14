import React from 'react';

export const AddComment = ({
  addCommentValue,
  commentValue,
  postComment,
  match,
}) => (
  <div>
    <input
      onChange={e => addCommentValue(e.target.value)}
      onKeyUp={e =>
        e.keyCode === 13 && commentValue
          ? postComment(commentValue, match.params.id)
          : null
      }
      value={commentValue}
    />
    <button
      type="button"
      onClick={() => postComment(commentValue, match.params.id)}
    >
      add comment
    </button>
  </div>
);

export default AddComment;
