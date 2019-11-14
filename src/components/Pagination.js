import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pagination.css";
import Articles from "./Articles";
import PaginationPages from "./PaginationPages";

const Pagination = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(20);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
        const API_KEY = "bab5a491a1c9462aab6d8aba66797a23";
    //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const res = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&pagesize=100&apiKey=${API_KEY}`);
        console.log(res);
        setArticles(res.data.articles);
    //   setArticles(res.data);
      setLoading(false);
    };
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
      <h1>Articles</h1>
      <Articles articles={currentArticles} loading={loading} />
      <PaginationPages
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Pagination;
