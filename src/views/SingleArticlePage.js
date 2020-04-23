import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const SingleArticlePage = ({
  articles,
  match: {
    params: { id },
  },
}) => {

  const [pageArticles, setPageArticles] = useState({});

  useEffect(() => {
    setPageArticles(articles[id]);
  }, [articles, id]);

  console.log(pageArticles);

  return (
    <div>
      <h1>{pageArticles.title}</h1>
      <p>{pageArticles.author}</p>
      <p>{pageArticles.publishedAt}</p>
      <img src={pageArticles.urlToImage} alt="article-visual" />
      <p>{pageArticles.content}</p>
      <Link to="/">back</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps)(SingleArticlePage);
