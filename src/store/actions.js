import axios from "axios";

const actions = {
  THEME: (state) => {
    state.commit("SET_THEME");
  },
  LOGIN_MENU: (state) => {
    state.commit("SET_LOGIN_MENU");
  },
  USER_RESPONSE: async (state) => {
    const userResponse = await axios
      .get("/api/users")
      .then((res) => res.data.users)
      .catch((err) => err);
    state.commit("LOAD_USER_RESPONSE", userResponse);
  },
  REPORT_RESPONSE: async (state) => {
    let total = 0;
    const data = await axios
      .get("/api/reports")
      .then((res) =>
        res.data.reports
          .map(
            (el) => (
              (total += el.total),
              {
                ...el,
                color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              }
            )
          )
          .sort((a, b) => (a.total > b.total ? 1 : b.total > a.total ? -1 : 0))
      )
      .catch((err) => err);

    let acc = 0;
    let aux = 0;
    const style = [];

    for (let i = 0; i < data.length; i++) {
      acc += aux;
      aux = Math.floor((data[i].total * 100) / total);
      style.push(`${data[i].color} 0deg ${aux + acc}%`);
    }
    let styleString = style.join();
    state.commit("LOAD_REPORT_RESPONSE", { data, style: styleString });
  },
};

export default actions;
