import { FETCH_POSTS } from "./actions";
import { postsReducer } from "./reducer";


describe("test posts reducer", () => {
  it("should return default state", () => {
    expect(postsReducer(undefined, {}))
      .toEqual([]);
  });

  it("should handle ADD_COUNTER", () => {
    expect(postsReducer([], {
      type: FETCH_POSTS,
      payload: [
        { id: 0, title: "post 1", body: "hello world" } 
      ]
    }))
    .toEqual([
      { id: 0, title: "post 1", body: "hello world" }
    ]);
  });
})
