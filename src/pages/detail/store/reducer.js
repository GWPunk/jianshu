import * as actionType from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  title: "",
  content: "",
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_DETAIL_DATA:
      return state.merge({
        title: action.title,
        content: action.content,
      });
    default:
      return state;
  }
};

export default reducer;
