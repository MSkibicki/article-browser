import * as actionTypes from "./actionTypes";

const initialState = {
  articles: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case actionTypes.SET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    default: {
      return state;
    }
  }
};

export default reducer;
