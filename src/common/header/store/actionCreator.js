import * as actionType from "./actionType";

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
