import countriesData from "./latestDataJSON";

const getPerformance = (le) => {
  let moreThan = [];
  let lessThan = [];
  countriesData.forEach((country) => {
    if (country.Life_Expectancy <= le) {
      moreThan.push(country.Country);
    } else {
      lessThan.push(country.Country);
    }
  });
  return { moreThan, lessThan };
};

export default getPerformance;
