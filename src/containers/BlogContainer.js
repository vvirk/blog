import { connect } from 'react-redux';
import { Blog } from '../components/Blog/Blog';
import { getPosts, toggleIsFetching } from '../actions/index';

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  posts: state.posts,
});
const mapDispatchToProps = {
  getPosts,
  toggleIsFetching,
};
export const BlogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blog);

export default BlogContainer;
