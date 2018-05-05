import { ADD_COUNTER, REDUCE_COUNTER } from "./actions";

export function counterReducer(state=0, action) {
  switch(action.type) {
    case ADD_COUNTER:
      return ++state;
    case REDUCE_COUNTER:
      return --state;
    default:
      return state;
  }
}
