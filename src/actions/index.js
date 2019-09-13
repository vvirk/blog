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

export const addCommentValue = commentValue => ({
  type: type.ADD_COMMENT_VALUE,
  commentValue,
});

export const addCommentToPost = comment => ({
  type: type.ADD_COMMENT_TO_POST,
  comment,
});

const urlPosts = 'https://simple-blog-api.crew.red/posts/';
const urlComments = 'https://simple-blog-api.crew.red/comments';

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

export const postComment = (comment, id) => async dispatch => {
  try {
    dispatch(addCommentValue(''));
    const data = { postId: +id, body: comment };
    const response = await fetch(urlComments, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();
    dispatch(addCommentToPost(data));
  } catch (e) {
    console.log(e);
  }
};

export const addNewPost = (id, author, title, body, date) => async dispatch => {
  try {
    const data = {
      title,
      body,
      id: +id,
      author,
      date,
    };
    const response = await fetch(urlPosts, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();
  } catch (e) {
    console.log(e);
  }
};
