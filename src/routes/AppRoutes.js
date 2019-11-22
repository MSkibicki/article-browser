import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import ArticlePage from "../views/ArticlePage";

const AppRoutes = () => {
  return (
    <>
      <main className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/article/:id" exact component={ArticlePage} />
      </main>
    </>
  );
};

export default AppRoutes;
