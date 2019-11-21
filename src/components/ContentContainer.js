import React from "react";
import "./ContentContainer.scss";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";

const ContentContainer = () => {
  return (
    <div className="wrapper">
      <Pagination />
      <Sidebar />
    </div>
  );
};

export default ContentContainer;
