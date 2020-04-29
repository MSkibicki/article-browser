import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleArticle from "../components/SingleArticle";

const ArticlePage = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <>
      <Navbar />
      <SingleArticle id={id} />
      <Footer />
    </>
  );
};

export default ArticlePage;
