import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddNewPost } from '../components/AddNewPost/AddNewPost';
import { addNewPost } from '../actions/index';

const mapStateToProps = state => ({
  posts: state.posts,
});
const mapDispatchToProps = {
  addNewPost,
};
export const AddNewPostContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddNewPost),
);

export default AddNewPostContainer;
