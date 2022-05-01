import React from "react";

const DataTable = ({ data }) => {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Country Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((countryName, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{countryName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
