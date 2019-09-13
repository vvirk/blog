import * as type from '../actions/actionTypes';

export const initialState = {
  posts: false,
  isFetching: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.TOGGLE_IS_FETSHING:
      return { ...state, isFetching: action.isFetching };
    case type.ADD_POSTS:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};
