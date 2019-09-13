import React from 'react';
import { Preloader } from '../Preloader/Preloader';
import { Comment } from '../Comment/Comment';
import { AddCommentContainer } from '../../containers/AddCommentContainer';

export class PostDetails extends React.Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { isFetching, post } = this.props;
    console.log(post);
    return (
      <div className="wrap">
        {isFetching ? <Preloader /> : null}
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>{post.author}</p>
        <p>{post.date}</p>
        <p>comments:</p>
        <AddCommentContainer />
        <ul>
          {post.comments
            ? post.comments.map(comment => (
                <Comment
                  body={comment.body}
                  postId={comment.postId}
                  id={comment.id}
                />
              ))
            : null}
        </ul>
      </div>
    );
  }
}

export default PostDetails;
