import * as type from './actionTypes';

export const addPosts = posts => ({
  type: type.ADD_POSTS,
  posts,
});

export const toggleIsFetching = isFetching => ({
  type: type.TOGGLE_IS_FETSHING,
  isFetching,
});

export const getPosts = () => async dispatch => {
  try {
    dispatch(toggleIsFetching(true));
    const url = 'https://api.dev.buki.com.ua/frontend_test';
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addPosts(responseBody));
    dispatch(toggleIsFetching(false));
 } catch(e) {console.log(e)}
};
