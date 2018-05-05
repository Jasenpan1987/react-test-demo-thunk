import { combineReducers } from "redux";
import { counterReducer as counter } from "../components/counter";
import { postsReducer as posts } from "../components/posts";
export const rootReducer = combineReducers({
  counter, posts
});
