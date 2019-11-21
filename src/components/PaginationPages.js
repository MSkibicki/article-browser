import React from "react";
import "./PaginationPages.scss";

const PaginationPages = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  //   console.log(pageNumbers)

  //   const paginationNumbers = Array.from({length: Math.ceil(totalArticles / articlesPerPage)}, (v, k) => k + 1);
  //   console.log(paginationNumbers)

  return (
    <nav>
      <ul className="article-pages">
        {pageNumbers.map(number => (
          <li key={number} className="article-pages-item">
            <button
              onClick={() => paginate(number)}
              className="article-pages-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationPages;
