import React, { useState, useEffect } from "react";
import "./Pagination.scss";
import Articles from "./Articles";
import PaginationPages from "./PaginationPages";
import { connect } from "react-redux";
import { fetchArticles } from "../store/actionCreators";

const Pagination = ({fetchArticles}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(4);

  useEffect(() => {
    fetchArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="pagination">
      <h1 className="pagination-articles">Articles</h1>
      <Articles articles={currentArticles} loading={loading} />
      <PaginationPages
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles())
});

export default connect(null, mapDispatchToProps)(Pagination);