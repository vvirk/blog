import React from 'react';
import { Preloader } from '../Preloader/Preloader';
import { PostsListContainer } from '../../containers/PostsListContainer';

export class Blog extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { isFetching } = this.props;
    return (
      <div className="blog-wrap">
        {isFetching ? <Preloader /> : null}
        <PostsListContainer />
      </div>
    );
  }
}

export default Blog;
