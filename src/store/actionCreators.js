import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchArticles = () => async dispatch => {
  dispatch(startLoading());
    const API_KEY = "bab5a491a1c9462aab6d8aba66797a23";
    const res = await axios.get(
    `https://newsapi.org/v2/everything?q=bitcoin&pagesize=100&apiKey=${API_KEY}`
    );
  dispatch(setArticles(res.data.articles));
  dispatch(stopLoading());
};

const setArticles = articles => ({
    type: actionTypes.SET_ARTICLES,
    payload: articles
});

const startLoading = () => ({
  type: actionTypes.START_LOADING
});

const stopLoading = () => ({
  type: actionTypes.STOP_LOADING
});
