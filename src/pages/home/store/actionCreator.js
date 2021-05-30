import * as actionType from "./actionType";
import axios from "axios";
import { fromJS } from "immutable";

const getList = (data) => {
  return {
    type: actionType.CHANGE_HOME_LIST,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList),
  };
};

export const getHomeData = () => {
  return (dispatch) => {
    axios
      .get("/api/home.json")
      .then((res) => {
        const result = res.data.data;
        const action = getList(result);
        dispatch(action);
      })
      .catch((err) => {
        console.log("err");
      });
  };
};

const moreList = (data, newPage) => {
  return {
    type: actionType.GET_MORE_LIST,
    articleList: fromJS(data),
    newPage,
  };
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios
      .get("/api/homeList.json?page=" + page)
      .then((res) => {
        const result = res.data.data;
        const action = moreList(result, page + 1);
        dispatch(action);
      })
      .catch((err) => {
        console.log("err");
      });
  };
};

export const toggleTopShow = (show) => {
  return {
    type: actionType.TOGGLE_TOP_SHOW,
    show,
  };
};
