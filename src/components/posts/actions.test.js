import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchPosts, FETCH_POSTS } from "./actions";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("posts actions", () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  });

  it("return correct FETCH_POSTS with correct payload", () => {
    fetchMock
      .getOnce("https://jsonplaceholder.typicode.com/posts",
      { body: [ { id: 0, title: "Foo bar", body: "hahaha" } ], headers: { 'content-type': 'application/json' } }
    );

    const store = mockStore({ posts: [] });

    const expectedActions = [
      { type: FETCH_POSTS, payload: [ { id: 0, title: "Foo bar", body: "hahaha" } ] }
    ];

    return store.dispatch(fetchPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });

  });
})