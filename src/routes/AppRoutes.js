import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import SingleArticlePage from "../views/SingleArticlePage";

const AppRoutes = () => {
  return (
    <>
      <main className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/article/:id" exact component={SingleArticlePage} />
      </main>
    </>
  );
};

export default AppRoutes;
