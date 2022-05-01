import React, { useState } from "react";
import "./customForm.css";
import { useNavigate } from "react-router-dom";

const CustomForm = (props) => {
  const [formInput, setFormInput] = useState({
    Year: null,
    Adult_Mortality: null,
    Alcohol: null,
    Percent_Expenditure: null,
    Hep_B: null,
    Measles: null,
    BMI: null,
    U_5_Deaths: null,
    Polio: null,
    Total_Expenditure: null,
    Infant_Deaths: null,
    Diphtheria: null,
    HIV_AIDS: null,
    Thinness_5_9: null,
    Thinness_10_19: null,
    Income_Composition: null,
    Schooling: null,
    country_code: null,
  });
  const [LE, setLE] = useState(0);
  const navigate = useNavigate();

  async function fetchData(payload) {
    const requestOptions = {
      method: "post",
      headers: {
        accept: "application/json",
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(
      "https://life-expectancy-predictor-101.herokuapp.com/",
      requestOptions
    );
    const jsonString = await response.json();
    const jsonObject = await JSON.parse(jsonString);
    return jsonObject.results;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let payload = {};

    Object.entries(formInput).forEach(
      ([key, val]) => (payload[key] = parseFloat(val))
    );

    const data = await fetchData(payload);
    setLE(data);
    navigate(`/ResultPage/${data}`);
  };

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid px-1 py-5 mx-auto my-5 customForm">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <h3>Calculate Life Expectenecy</h3>
          <div className="card">
            <h5 className="text-center mb-4">
              Please Provide Following Information
            </h5>
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="row justify-content-between text-left">
                {Object.keys(formInput).map((inputField, index) => {
                  return (
                    <div
                      className="form-group col-sm-6 flex-column d-flex"
                      key={index}
                    >
                      <label className="form-control-label px-3">
                        {inputField.replace("_", " ")}
                        <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        id={inputField}
                        name={inputField}
                        placeholder={`Enter ${inputField.replace("_", " ")}`}
                        autoComplete="true"
                        onChange={handleChange}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="row justify-content-end">
                <div className="form-group col-sm-12">
                  <button type="submit" className="btn-block btn-primary">
                    Predict
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
