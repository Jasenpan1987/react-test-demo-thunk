import { ADD_COUNTER } from "./actions";
import { counterReducer } from "./reducer";

describe("test counter reducer", () => {
  it("should return default state", () => {
    expect(counterReducer(undefined, {}))
      .toEqual(0);
  });

  it("should handle ADD_COUNTER", () => {
    expect(counterReducer(0, { type: ADD_COUNTER }))
      .toEqual(1);
  });
})