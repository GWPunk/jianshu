import * as actionType from "./actionType";
import axios from "axios";
import { fromJS } from "immutable";

const getList = (data) => {
  return {
    type: actionType.SEARCH_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
  };
};

export const getSeachFocus = () => {
  return {
    type: actionType.SEARCH_FOCUS,
  };
};

export const getSeachBlur = () => {
  return {
    type: actionType.SEARCH_BLUR,
  };
};

export const getSeachList = () => {
  return (dispatch) => {
    axios
      .get("./api/headerList.json")
      .then((res) => {
        dispatch(getList(res.data.data));
      })
      .catch((err) => {
        console.log("err");
      });
  };
};

export const getChangeList = (page) => {
  return {
    type: actionType.CHANGE_LIST,
    page,
  };
};

export const getMouseEnter = () => {
  return {
    type: actionType.MOUSE_ENTER,
  };
};

export const getMouseLeave = () => {
  return {
    type: actionType.MOUSE_LEAVE,
  };
};
