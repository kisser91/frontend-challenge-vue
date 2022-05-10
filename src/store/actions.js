import axios from "axios";
import lastDate from "../hooks/lastDate";
import randomColor from "../hooks/randomColor";
import convertDate from "../hooks/convertDate";
import pieGraphCSS from "../hooks/pieGraphCSS";
import moment from "moment";

const actions = {
  THEME: (state) => {
    state.commit("SET_THEME");
  },
  LOGIN_MENU: (state) => {
    state.commit("SET_LOGIN_MENU");
  },
  USER_RESPONSE: async (state) => {
    let aux;
    const userResponse = await axios
      .get("/api/users")
      .then((res) =>
        res.data.users.map(
          (el) => (
            (aux = lastDate(el.sessions)),
            {
              ...el,
              lastConnection: convertDate(aux),
              fromNow: moment(aux).fromNow(),
            }
          )
        )
      )
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
                color: randomColor(),
              }
            )
          )
          .sort((a, b) => (a.total > b.total ? 1 : b.total > a.total ? -1 : 0))
      )
      .catch((err) => err);

    state.commit("LOAD_REPORT_RESPONSE", {
      data,
      style: pieGraphCSS(data, total),
    });
  },
};

export default actions;
