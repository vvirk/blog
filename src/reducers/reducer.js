import * as type from '../actions/actionTypes';

export const initialState = {
  isFetching: false,
  posts: false,
  post: false,
  comment: '',
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.TOGGLE_IS_FETSHING:
      return { ...state, isFetching: action.isFetching };
    case type.ADD_POSTS:
      return { ...state, posts: action.posts };
    case type.ADD_POST:
      return { ...state, post: action.post };
    case type.ADD_COMMENT_VALUE:
      return { ...state, comment: action.commentValue };
    case type.ADD_COMMENT_TO_POST:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.comment],
        },
      };
    default:
      return state;
  }
};
