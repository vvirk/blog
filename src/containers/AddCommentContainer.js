import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddComment } from '../components/AddComment/AddComment';
import { addCommentValue, postComment } from '../actions/index';

const mapStateToProps = state => ({
  commentValue: state.comment,
});
const mapDispatchToProps = {
  addCommentValue,
  postComment,
};
export const AddCommentContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddComment),
);

export default AddCommentContainer;
