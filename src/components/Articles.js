import React from "react";
import "./Articles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Articles = ({ articles, loading }) => {
  // const { articles } = this.props

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className="article-list">
      {articles.map((article, index) => (
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
  loading: state.loading
});

export default connect(mapStateToProps)(Articles);
