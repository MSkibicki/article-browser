import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchArticles = () => async (dispatch, state) => {
  dispatch(startLoading());
  const API_KEY = "bab5a491a1c9462aab6d8aba66797a23";
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=business&pagesize=50&apiKey=${API_KEY}`
  );
  dispatch(setArticles(res.data.articles));
  dispatch(setPageNumbers(res.data.articles, state().articlesPerPage));
  dispatch(stopLoading());
};

const setPageNumbers = (articles, articlesPerPage) => ({
  type: actionTypes.SET_PAGE_NUMBERS,
  paginationNumbers: Math.ceil(articles.length / articlesPerPage),
});

const setArticles = (articles) => ({
  type: actionTypes.SET_ARTICLES,
  articles,
});

const startLoading = () => ({
  type: actionTypes.START_LOADING,
});

const stopLoading = () => ({
  type: actionTypes.STOP_LOADING,
});

export const setCurrentPage = (page) => ({
  type: actionTypes.SET_CURRENT_PAGE,
  page,
});
