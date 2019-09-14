import React from 'react';
import { Redirect } from 'react-router-dom';

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
      done,
      id,
      postInfo,
      changeAuthor,
      changeTitle,
      changeBody,
      editPost,
    } = this.props;
    return (
      <div>
        <h2>Create new post</h2>
        <input
          value={postInfo.author}
          onChange={e => changeAuthor(e.target.value)}
          type="text"
          placeholder="author"
        />
        <input
          value={postInfo.title}
          onChange={e => changeTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <textarea
          value={postInfo.body}
          onChange={e => changeBody(e.target.value)}
          placeholder="post body"
        />
        <button
          type="button"
          onClick={() =>
            editPost(id, postInfo.author, postInfo.title, postInfo.body)
          }
        >
          EDIT POST
        </button>
        {done ? <Redirect to="/" /> : null}
      </div>
    );
  }
}
export default EditPost;
