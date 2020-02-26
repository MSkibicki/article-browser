import React from "react";
import "./PaginationPages.scss";
import { setCurrentPage } from "../store/actionCreators";
import { connect } from "react-redux";

const PaginationPages = ({ pageNumbers, setCurrentPage }) => {
  return (
    <nav>
      <ul className="article-pages">
        {pageNumbers &&
          Array.from({ length: pageNumbers }, (_, k) => k + 1).map(page => (
            <li key={page} className="article-pages-item">
              <button
                onClick={() => setCurrentPage(page)}
                className="article-pages-link"
              >
                {page}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  pageNumbers: state.pageNumbers
});

const mapDispatchToProps = dispatch => ({
  setCurrentPage: page => dispatch(setCurrentPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationPages);
