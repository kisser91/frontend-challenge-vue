// Imports breaks the test
const state = require("../../src/main");

describe("test example", () => {
  it("testing jest", () => {
    const msg = "new message";
    expect(msg).toEqual("new message");
  });
});
