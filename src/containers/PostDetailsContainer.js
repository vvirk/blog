import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PostDetails } from '../components/PostDetails/PostDetails';
import { toggleIsFetching, getPost } from '../actions/index';

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  post: state.post,
});
const mapDispatchToProps = {
  toggleIsFetching,
  getPost,
};
export const PostDetailsContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostDetails),
);

export default PostDetailsContainer;
