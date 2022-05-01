import React, { useState } from "react";
import "./CountrySelect.css";

import countries from "./countries";
import countriesData from "../../latestDataJSON";
import getPerformance from "../../performance";

import { useNavigate } from "react-router-dom";

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [peformance, setPerformance] = useState(null);
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

    let selectedCountryData = countriesData.find(
      (country) => country.Country === selectedCountry
    );

    let payload = {
      Year: 2015,
      Adult_Mortality: parseFloat(selectedCountryData.Adult_Mortality),
      Alcohol: parseFloat(selectedCountryData.Alcohol),
      Percent_Expenditure: parseFloat(selectedCountryData.Percent_Expenditure),
      Hep_B: parseFloat(selectedCountryData.Hep_B),
      Measles: parseFloat(selectedCountryData.Measles),
      BMI: parseFloat(selectedCountryData.BMI),
      U_5_Deaths: parseFloat(selectedCountryData.U_5_Deaths),
      Polio: parseFloat(selectedCountryData.Polio),
      Total_Expenditure: parseFloat(selectedCountryData.Total_Expenditure),
      Infant_Deaths: parseFloat(selectedCountryData.Infant_Deaths),
      Diphtheria: parseFloat(selectedCountryData.Diphtheria),
      HIV_AIDS: parseFloat(selectedCountryData.HIV_AIDS),
      Thinness_5_9: parseFloat(selectedCountryData.Thinness_5_9),
      Thinness_10_19: parseFloat(selectedCountryData.Thinness_10_19),
      Income_Composition: parseFloat(selectedCountryData.Income_Composition),
      Schooling: parseFloat(selectedCountryData.Schooling),
      country_code: selectedCountryData.Status === "Developing" ? 0 : 1,
    };

    const data = await fetchData(payload);
    setPerformance(getPerformance(parseFloat(data)));
    setLE(data);

    navigate(`/ResultPage/${data}`);
  };

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="container-fluid px-4 py-5 mx-auto my-5 countrySelect">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <h3>Know Life Expectenecy for Your Country</h3>
          <div className="card">
            <h5 className="text-center mb-4">
              Please Provide Following Information
            </h5>
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="form-group col-sm-12 flex-column d-flex">
                <label className="form-control-label px-3">
                  Country
                  <span className="text-danger"> *</span>
                  <select
                    className="col-sm-12"
                    value={selectedCountry}
                    onChange={handleChange}
                  >
                    <option value="">Select A Country</option>
                    {countries.map((country, index) => (
                      <option value={country} key={index}>
                        {country}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="row justify-content-end">
                <div className="form-group col-sm-12">
                  <button type="submit" className="btn-block btn-primary">
                    Predict
                  </button>
                </div>
              </div>
            </form>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySelect;
