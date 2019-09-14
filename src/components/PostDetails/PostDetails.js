import React from 'react';
import { Link } from 'react-router-dom';
import { Preloader } from '../Preloader/Preloader';
import { Comment } from '../Comment/Comment';
import { AddCommentContainer } from '../../containers/AddCommentContainer';

// styles
import s from './styles/postDetails.module.scss';

export class PostDetails extends React.Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { isFetching, post, match } = this.props;
    return (
      <div className="wrap">
        {isFetching ? <Preloader /> : null}
        <h2 className={s.title}>{post.title}</h2>
        <div className={s.desc}>
          <p>{post.body}</p>
        </div>
        <div className={s.info}>
          <p>{post.author}</p>
          <p>{post.date}</p>
        </div>
        <Link className={s.link} to={`/details/${match.params.id}/edit`}>
          edit
        </Link>
        <h3 className={s.subtitle}>comments:</h3>
        <AddCommentContainer />
        <ul className={s.list}>
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
