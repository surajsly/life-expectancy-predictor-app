import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div className="px-4 pt-5 my-5 ">
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold">Life Expectancy Predictor</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              This Life Expectancy Preditor based on Machine Learning Model
              Trained using data provided by the WHO (World Health
              Organization). The dataset has been analyzed and applied in
              several machine learning model in order to predict the life
              expectancy depending upon various factors. . The best{" "}
              <strong className="fw-bold">
                R<sup>2</sup> Score achieved is 0.930{" "}
              </strong>{" "}
              and{" "}
              <strong className="fw-bold">
                mean absolute error is only 1.29{" "}
              </strong>
              .
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <Link to="/CustomForm" className="nav-link active">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-sm-3"
                >
                  Custom Country Data
                </button>
              </Link>
              <Link to="/CountrySelect" className="nav-link active">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Select Country
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 :  Life Expectancy Trends Around World : START*/}

      <div className="mx-5 my-5 align-items-center">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
              Life Expectancy Trends Around World
            </h1>
            <p className="lead">
              The maximum value <strong className="fw-bold">89.0 Years</strong>{" "}
              is about 2.08 standard deviations away from the mean{" "}
              <strong className="fw-bold">69.2 Years</strong> while the minimum
              36.3 Years is about 3.46 deviations away. The standard deviation
              for the whole sample is 9.50 years
            </p>
          </div>
          <div className="col-md-4  p-0 overflow-hidden mx-auto  shadow-lg">
            <img
              className="rounded-lg-3"
              src={process.env.PUBLIC_URL + "/life_expectancy_world.png"}
              alt=""
              width="720"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Section 1 :  Life Expectancy Trends Around World  : END*/}
      {/* Section 2 :  Life Expectancy ( Developed VS. Developing countries) : START*/}

      <div className="mx-5 my-5 align-items-center">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-md-4  p-0 overflow-hidden mx-auto  shadow-lg">
            <img
              className="rounded-lg-3"
              src={
                process.env.PUBLIC_URL +
                "/life_expectancy_Developed_Vs_Developing.png"
              }
              alt=""
              width="720"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
              Life Expectancy ( Developed VS. Developing countries)
            </h1>
            <p className="lead">
              Out of total of <strong className="fw-bold">193 countries</strong>{" "}
              in dataset 159 are developing countries and 34 are developed
              countries. Mean life expectancy in developing countries is{" "}
              <strong className="fw-bold">67.1 years</strong> and{" "}
              <strong className="fw-bold">79.1 Years</strong>for developed
              countries. The cut off boundary age between developing and
              developed is 69.9 Years.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 :  Life Expectancy ( Developed VS. Developing countries) : END*/}

      {/* Section 3 : life_expectancy_11_Vs_2_Vs_3 : START*/}

      <div className="mx-5 my-5 align-items-center">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
              Life Expectancy 1<sup>st</sup> World, 2<sup>nd</sup> World, 3
              <sup>rd</sup> World Countries
            </h1>
            <p className="lead">
              1st world countries are have life Expectancy of{" "}
              <strong className="fw-bold">70.0 Years</strong> while 2nd world
              countries have life Expectancy over{" "}
              <strong className="fw-bold">60.0 Years</strong> and rest can be
              considered as 3rd world countries. 
            </p>
          </div>
          <div className="col-md-4  p-0 overflow-hidden mx-auto  shadow-lg">
            <img
              className="rounded-lg-3"
              src={process.env.PUBLIC_URL + "/life_expectancy_11_Vs_2_Vs_3.png"}
              alt=""
              width="720"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Section 3 : life_expectancy_11_Vs_2_Vs_3  : END*/}
    </React.Fragment>
  );
};

export default Home;
