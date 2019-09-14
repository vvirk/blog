import React, { useRef } from 'react';
import * as moment from 'moment';
import { addId } from '../../utils/addId';

// styles
import s from './styles/addNewPost.module.scss';

export const AddNewPost = ({ addNewPost, posts }) => {
  const author = useRef();
  const title = useRef();
  const body = useRef();
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
            addId(posts),
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
