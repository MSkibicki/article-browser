import React from "react";

const Articles = ({ articles, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className="article-list">
      {articles.map(article => (
        <li key={article.id} className="article-list-item">
          {article.title}
        </li>
      ))}
    </ul>
  );
};

export default Articles;
