import { addCounter, ADD_COUNTER } from "./actions";

describe("test action creators", () => {
  it("add counter should return correct actions", () => {
    expect(addCounter()).toEqual({ type: ADD_COUNTER });
  })
})
