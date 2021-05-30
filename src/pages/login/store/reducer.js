import * as actionType from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  login: false,
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_LOGIN_DATA:
      return state.set("login", action.login);
    case actionType.LOGIN_OUT:
      return state.set("login", false);
    default:
      return state;
  }
};

export default reducer;
