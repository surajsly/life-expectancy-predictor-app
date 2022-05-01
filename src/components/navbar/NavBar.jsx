import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
        <div className="container">
          <Link to="/" className="nav-link">
            {/* <img
              src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png"
              height="70"
              alt=""
              loading="lazy"
            /> */}
            <strong> Life Expectancy Predictor</strong>
          </Link>
          <button
            className="navbar-toggler ps-0"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon d-flex justify-content-start align-items-center">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link to="/CountrySelect" className="nav-link">
                  Select Country
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CustomForm" className="nav-link active">
                  Custom Country Data
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MachineLearningModels" className="nav-link active">
                  Machine Learning Model
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
