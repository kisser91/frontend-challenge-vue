const mutations = {
  SET_THEME: (state) => {
    if (state.theme.bool) state.theme = { theme: " ", bool: false };
    else state.theme = { theme: "dark", bool: true };
  },
  SET_LOGIN_MENU: (state) => {
    if (state.loginMenu) state.loginMenu = false;
    else state.loginMenu = true;
  },
  LOAD_USER_RESPONSE: (state, res) => (state.userResponse = res),
  LOAD_REPORT_RESPONSE: (state, res) => (state.reportResponse = res),
};

export default mutations;
