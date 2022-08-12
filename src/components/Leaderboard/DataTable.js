import React from "react";

const DataTable = ({ data }) => {
  let place = 0;

  const table = Object.entries(data).map(([name, time]) => {
    place++;
    return (
      <div key={place}>
        <span>{place + ". " + name.split("#")[0]}</span> <span>{time + "s"}</span>
      </div>
    );
  });
  return table;
};

export default DataTable;
