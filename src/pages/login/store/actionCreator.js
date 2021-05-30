import * as actionType from "./actionType";
import axios from "axios";
// import { fromJS } from "immutable";

const getLogin = (data) => {
  return {
    type: actionType.GET_LOGIN_DATA,
    login: data,
  };
};

export const Login = (account, password) => {
  return (dispatch) => {
    axios
      .get("/api/login.json?account=" + account + "&password=" + password)
      .then((res) => {
        const result = res.data.data;
        const action = getLogin(result);
        dispatch(action);
      })
      .catch((err) => {
        console.log("登录失败");
      });
  };
};

export const loginOut = () => {
  return {
    type: actionType.LOGIN_OUT,
    login: false,
  };
};
