import * as type from './actionTypes';

export const toggleIsFetching = isFetching => ({
  type: type.TOGGLE_IS_FETSHING,
  isFetching,
});

export const addPosts = posts => ({
  type: type.ADD_POSTS,
  posts,
});

export const addPost = post => ({
  type: type.ADD_POST,
  post,
});

const urlPosts = 'https://simple-blog-api.crew.red/posts/';
export const getPosts = () => async dispatch => {
  try {
    dispatch(toggleIsFetching(true));
    const response = await fetch(urlPosts);
    const responseBody = await response.json();
    dispatch(addPosts(responseBody));
    dispatch(toggleIsFetching(false));
  } catch (e) {
    console.log(e);
  }
};

export const getPost = id => async dispatch => {
  try {
    dispatch(toggleIsFetching(true));
    const url = `${urlPosts}${id}?_embed=comments`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addPost(responseBody));
    dispatch(toggleIsFetching(false));
  } catch (e) {
    console.log(e);
  }
};
