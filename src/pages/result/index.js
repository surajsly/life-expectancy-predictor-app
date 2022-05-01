import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useParams } from "react-router-dom";

import getPerformance from "../../performance";
import DataTable from "../../components/DataTable/DataTable";

const ResultPage = (props) => {
  let { LE } = useParams();
  const [peformance, setPerformance] = useState(getPerformance(parseFloat(LE)));

  return (
    <React.Fragment>
      <div className="px-4 pt-5 my-5 ">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row justify-content-md-center text-center g-5 py-5">
            {/*  */}
            <ReactSpeedometer
              value={parseFloat(LE)}
              width={500}
              needleHeightRatio={0.7}
              maxValue={100}
              currentValueText={`Predicted Life Expectancy ${parseInt(
                LE
              )} Years ${parseInt((LE % 1).toFixed(2) * 12)} Months`}
              customSegmentLabels={[
                {
                  text: "Very Bad",
                  position: "INSIDE",
                  color: "#555",
                },
                {
                  text: "Bad",
                  position: "INSIDE",
                  color: "#555",
                },
                {
                  text: "Ok",
                  position: "INSIDE",
                  color: "#555",
                  fontSize: "19px",
                },
                {
                  text: "Good",
                  position: "INSIDE",
                  color: "#555",
                },
                {
                  text: "Very Good",
                  position: "INSIDE",
                  color: "#555",
                },
              ]}
              ringWidth={47}
              needleTransitionDuration={10000}
              needleTransition="easeElastic"
              needleColor={"#90f2ff"}
              textColor={"#000"}
            />
            {peformance === null ? (
              ""
            ) : (
              <div>
                <p>
                  Perform Better than {peformance.moreThan.length} Countries but
                  worse than {peformance.lessThan.length} Countries
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Perform Better Than</h2>
                    <DataTable data={peformance.moreThan} />
                  </div>
                  <div className="col-sm-6">
                    <h2>Perform Worse Than</h2>
                    <DataTable data={peformance.lessThan} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

ResultPage.defaultProps = {
  LE: 0,
};

export default ResultPage;
