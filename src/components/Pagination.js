import React, { useEffect } from "react";
import "./Pagination.scss";
import Articles from "./Articles";
import PaginationPages from "./PaginationPages";
import { connect } from "react-redux";
import { fetchArticles } from "../store/actionCreators";

const Pagination = ({fetchArticles}) => {
  useEffect(() => {
    fetchArticles();
  }, []);
  
  return (
    <div className="pagination">
      <h1 className="pagination-articles">Articles</h1>
      <Articles />
      <PaginationPages />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles())
});

export default connect(null, mapDispatchToProps)(Pagination);