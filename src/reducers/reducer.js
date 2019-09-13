import * as type from '../actions/actionTypes';

export const initialState = {
  isFetching: false,
  posts: false,
  post: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.TOGGLE_IS_FETSHING:
      return { ...state, isFetching: action.isFetching };
    case type.ADD_POSTS:
      return { ...state, posts: action.posts };
    case type.ADD_POST:
      return { ...state, post: action.post };
    default:
      return state;
  }
};
