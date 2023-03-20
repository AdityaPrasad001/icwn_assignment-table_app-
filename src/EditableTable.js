import React, { useState } from "react";
import TableRow from "./TableRow";

const EditableTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);

  const submitHandler = () => {
    alert("Date is ready, see console ✅");
    console.log(tableData);
  };

  const handleRowChange = (rowData) => {
    const newData = tableData.map((row) => {
      if (row.id === rowData.id) {
        return rowData;
      }
      return row;
    });
    //  console.log(newData);
    setTableData(newData);
  };

  return (
    <div className="container">
      <div className="head">
        <h3>My Table</h3>
        <button className="btn" onClick={submitHandler}>
          Submit
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Month 1</th>
              <th>Note 1</th>
              <th>Note 2</th>
              <th>Note 3</th>
              <th>Note 4</th>
              <th>Note 5</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                data={row}
                handleRowChange={handleRowChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditableTable;
