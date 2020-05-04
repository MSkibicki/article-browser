import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./SingleArticle.scss";

const SingleArticle = ({ articles, id }) => {
  const [pageArticles, setPageArticles] = useState({});

  useEffect(() => {
    setPageArticles(articles[id]);
  }, [articles, id]);

  return (
    <div className="single-article">
      <h1 className="single-article-title">{pageArticles.title}</h1>
      <div className="single-article-author-group">
        <h3 className="single-article-author">{pageArticles.author}</h3>
        <p className="single-article-date">{pageArticles.publishedAt}</p>
      </div>
      <div className="single-article-img-group">
        <img
          className="single-article-img"
          src={pageArticles.urlToImage}
          alt="article-visual"
        />
        <p className="single-article-paragraph">{pageArticles.content}</p>
      </div>
      <Link className="single-article-button" to="/">
        Back to Homepage
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps)(SingleArticle);
