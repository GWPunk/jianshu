import * as actionType from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUS:
      return state.set("focused", true);
    case actionType.SEARCH_BLUR:
      return state.set("focused", false);
    case actionType.SEARCH_LIST:
      return state.set("list", action.data).set("totalPage", action.totalPage);
    case actionType.CHANGE_LIST:
      return state.set("page", action.page);
    case actionType.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionType.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    default:
      return state;
  }
};

export default reducer;
