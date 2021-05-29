import * as actionType from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false,
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_HOME_LIST:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
      });
    case actionType.GET_MORE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.articleList),
        articlePage: action.newPage,
      });
    case actionType.TOGGLE_TOP_SHOW:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};

export default reducer;
