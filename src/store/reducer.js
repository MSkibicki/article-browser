import * as actionTypes from "./actionTypes";

export const initialState = {
  articles: [],
  loading: false,
  pageNumbers: null,
  currentPage: 1,
  articlesPerPage: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.SET_ARTICLES:
      return {
        ...state,
        articles: action.articles,
      };
    case actionTypes.SET_PAGE_NUMBERS:
      return {
        ...state,
        pageNumbers: action.paginationNumbers,
      };
    case actionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
