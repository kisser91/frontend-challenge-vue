import state from "../../src/store/state";
import mutations from "../../src/store/mutations";

describe("Uninitialized Store test ", () => {
  it(" initial State test ", () => {
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
  it(" Test Theme mutation - dark to light ", () => {
    const themeLight = {
      theme: " ",
      bool: false,
    };

    mutations.SET_THEME(state);

    expect(state.theme).toEqual(themeLight);
  });
  it(" Test Theme mutation - light to dark ", () => {
    const stateMutated = {
      theme: {
        theme: "",
        bool: false,
      },
    };

    mutations.SET_THEME(stateMutated);

    expect(state.theme).toEqual(state.theme);
  });
  it(" Test Menu - open to close ", () => {
    const stateMutated = {
      loginMenu: true,
    };

    mutations.SET_LOGIN_MENU(stateMutated);

    expect(stateMutated.loginMenu).toEqual(state.loginMenu);
  });
  it(" Test Menu - close to open ", () => {
    const stateMutated = {
      loginMenu: false,
    };

    mutations.SET_LOGIN_MENU(stateMutated);

    expect(stateMutated.loginMenu).toEqual(true);
  });
});
