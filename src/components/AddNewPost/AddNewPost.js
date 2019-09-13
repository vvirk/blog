import React, { useRef } from 'react';
import * as moment from 'moment';

export const AddNewPost = ({ addNewPost, posts }) => {
  const author = useRef();
  const title = useRef();
  const body = useRef();
  const lastPost = posts.length - 1;
  const id = posts[lastPost].id + 1;
  return (
    <div>
      <h2>Create new post</h2>
      <input type="text" placeholder="author" ref={author} />
      <input type="text" placeholder="title" ref={title} />
      <textarea placeholder="post body" ref={body} />
      <button
        onClick={() =>
          addNewPost(
            id,
            author.current.value,
            title.current.value,
            body.current.value,
            moment().format("YYYY-MM-D HH:mm:ss"),
          )
        }
      >
        ADD POST
      </button>
    </div>
  );
};

export default AddNewPost;
