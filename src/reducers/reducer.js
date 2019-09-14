import * as type from '../actions/actionTypes';

export const initialState = {
  isFetching: false,
  posts: false,
  post: false,
  comment: '',
  done: false,
  postInfo: false,
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
    case type.CHANGE_AUTHOR:
      return {
        ...state,
        postInfo: { ...state.postInfo, author: action.author },
      };
    case type.CHANGE_TITLE:
      return {
        ...state,
        postInfo: { ...state.postInfo, title: action.title },
      };
    case type.CHANGE_BODY:
      return {
        ...state,
        postInfo: { ...state.postInfo, body: action.body },
      };
    case type.EDIT_POST_INFO:
      return {
        ...state,
        postInfo: {
          ...state.postInfo,
          author: action.author,
          title: action.title,
          body: action.body,
        },
      };
    case type.CLEAR_POST_INFO:
      return { ...state, postInfo: action.clear };
    case type.DONE:
      return { ...state, done: action.done };
    default:
      return state;
  }
};
