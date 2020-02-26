import React from "react";
import "./Articles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Articles = ({ articles, loading, articlesPerPage, currentPage }) => {
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className="article-list">
      {currentArticles.map((article, index) => (
        <Link to={`article/${index}`}>
          <li key={index} className="article-list-item">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <p className="article-list-item-author">- {article.author}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  articles: state.articles,
  loading: state.loading,
  articlesPerPage: state.articlesPerPage,
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(Articles);
