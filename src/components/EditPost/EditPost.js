import React from 'react';

// styles
import s from '../AddNewPost/styles/addNewPost.module.scss';

export class EditPost extends React.Component {
  componentDidMount() {
    this.props.editPostInfo(
      this.props.post.author,
      this.props.post.title,
      this.props.post.body,
    );
  }

  render() {
    const {
      id,
      postInfo,
      changeAuthor,
      changeTitle,
      changeBody,
      editPost,
    } = this.props;
    return (
      <div>
        <h2 className={s.title}>Edit post</h2>
        <input
          className={s.input}
          value={postInfo.author}
          onChange={e => changeAuthor(e.target.value)}
          type="text"
          placeholder="author"
        />
        <input
          className={s.input}
          value={postInfo.title}
          onChange={e => changeTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <textarea
          className={s.input}
          value={postInfo.body}
          onChange={e => changeBody(e.target.value)}
          placeholder="post body"
        />
        <button
          className={s.btn}
          type="button"
          onClick={() =>
            editPost(id, postInfo.author, postInfo.title, postInfo.body)
          }
        >
          EDIT POST
        </button>
      </div>
    );
  }
}
export default EditPost;
