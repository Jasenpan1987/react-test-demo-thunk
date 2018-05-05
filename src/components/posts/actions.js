import * as API from "./api";
export const FETCH_POSTS = "FETCH_POSTS";

export const fetchPosts = () => {
  return async dispatch => {
    const payload = await API.getPosts();
    return dispatch({
      type: FETCH_POSTS,
      payload
    });
  };
}
