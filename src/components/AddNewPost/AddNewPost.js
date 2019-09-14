import React, { useRef } from 'react';
import * as moment from 'moment';

// styles
import s from './styles/addNewPost.module.scss';

export const AddNewPost = ({ addNewPost, posts }) => {
  const author = useRef();
  const title = useRef();
  const body = useRef();
  const lastPost = posts.length - 1;
  const id = posts[lastPost] ? posts[lastPost].id + 1 : null;
  return (
    <div>
      <h2 className={s.title}>Create new post</h2>
      <input
        className={s.input}
        type="text"
        placeholder="author"
        ref={author}
      />
      <input className={s.input} type="text" placeholder="title" ref={title} />
      <textarea className={s.input} placeholder="post body" ref={body} />
      <button
        className={s.btn}
        type="button"
        onClick={() =>
          addNewPost(
            id,
            author.current.value,
            title.current.value,
            body.current.value,
            moment().format('YYYY-MM-D HH:mm:ss'),
          )
        }
      >
        ADD POST
      </button>
    </div>
  );
};

export default AddNewPost;
