import * as actionType from "./actionType";
import axios from "axios";
// import { fromJS } from "immutable";

const getDetail = (data) => {
  return {
    type: actionType.GET_DETAIL_DATA,
    title: data.title,
    content: data.content,
  };
};

export const getDetailData = (id) => {
  return (dispatch) => {
    axios
      .get("/api/detail.json?id=" + id)
      .then((res) => {
        const result = res.data.data;
        const action = getDetail(result);
        dispatch(action);
      })
      .catch((err) => {
        console.log("err");
      });
  };
};
