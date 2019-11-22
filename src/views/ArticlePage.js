import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ArticlePage = ({
  articles,
  match: {
    params: { id }
  }
}) => {
  console.log(articles[id]);
  return (
    <div>
      <h1>hello from article.</h1>
      <Link to="/">back</Link>
    </div>
  );
};

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(mapStateToProps)(ArticlePage);
