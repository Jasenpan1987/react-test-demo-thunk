import { FETCH_POSTS } from "./actions";

export function postsReducer(state=[], action) {
  if (action.type === FETCH_POSTS) {
    return action.payload;
  }
  return state;
}
