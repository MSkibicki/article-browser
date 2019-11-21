import React from "react";
import "./Articles.scss"

const Articles = ({ articles, loading }) => {
  const randomNum = _ => Math.floor(Math.random() * 10001);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className="article-list">
      {articles.map(article => (
        <li key={randomNum()} className="article-list-item">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <p className="article-list-item-author">- {article.author}</p>
        </li>
      ))}
    </ul>
  );
};

export default Articles;
