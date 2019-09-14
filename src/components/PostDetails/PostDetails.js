import React from 'react';
import { Link } from 'react-router-dom';
import { Preloader } from '../Preloader/Preloader';
import { Comment } from '../Comment/Comment';
import { AddCommentContainer } from '../../containers/AddCommentContainer';

export class PostDetails extends React.Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { isFetching, post, match } = this.props;
    console.log(post);
    return (
      <div className="wrap">
        {isFetching ? <Preloader /> : null}
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>{post.author}</p>
        <p>{post.date}</p>
        <Link to={`/details/${match.params.id}/edit`}>edit</Link>
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
