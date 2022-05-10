import state from "../../src/store/state";

describe("HelloWorld.vue", () => {
  it("initial State ", () => {
    const initialState = {
      theme: {
        theme: "dark",
        bool: true,
      },
      userResponse: null,
      reportResponse: null,
      loginMenu: false,
    };

    expect(state).toEqual(initialState);
  });
});
