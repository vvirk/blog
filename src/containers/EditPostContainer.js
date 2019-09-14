import { connect } from 'react-redux';
import { EditPost } from '../components/EditPost/EditPost';
import {
  editPost,
  changeAuthor,
  changeTitle,
  changeBody,
  editPostInfo,
} from '../actions/index';

const mapStateToProps = state => ({
  done: state.done,
  id: state.post.id,
  postInfo: state.postInfo,
  post: state.post,
});
const mapDispatchToProps = {
  editPost,
  changeAuthor,
  changeTitle,
  changeBody,
  editPostInfo,
};
export const EditPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost);

export default EditPostContainer;
