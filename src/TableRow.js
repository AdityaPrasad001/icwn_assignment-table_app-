import React from "react";

const TableRow = ({ data, handleRowChange }) => {
  const handleInputChange = (e, key) => {
    const newData = { ...data, [key]: e.target.value };
    console.log(newData);
    handleRowChange(newData);
  };

  return (
    <tr>
      <td className="title_row">{data.title}</td>

      <td>
        <input
          type="text"
          value={data.n1}
          onChange={(e) => handleInputChange(e, "n1")}
        />
      </td>

      <td>
        <input
          type="text"
          value={data.n2}
          onChange={(e) => handleInputChange(e, "n2")}
        />
      </td>

      <td>
        <input
          type="text"
          value={data.n3}
          onChange={(e) => handleInputChange(e, "n3")}
        />
      </td>

      <td>
        <input
          type="text"
          value={data.n4}
          onChange={(e) => handleInputChange(e, "n4")}
        />
      </td>

      <td>
        <input
          type="text"
          value={data.n5}
          onChange={(e) => handleInputChange(e, "n5")}
        />
      </td>
    </tr>
  );
};

export default TableRow;
