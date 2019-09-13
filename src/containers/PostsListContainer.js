import { connect } from 'react-redux';
import { PostsList } from '../components/PostsList/PostsList';
import { toggleIsFetching } from '../actions/index';

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  posts: state.posts,
});
const mapDispatchToProps = {
  toggleIsFetching,
};
export const PostsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList);

export default PostsListContainer;
