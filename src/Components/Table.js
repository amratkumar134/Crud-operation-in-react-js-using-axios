import React from "react";
import Delete from "./Delete";

function Table({ data, handleEditClick }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>UserId</th>
          <th>Email</th>
          <th>Password</th>
          <th>Confirm Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item?.UserId}</td>
            <td>{item?.Email}</td>
            <td>{item?.Password}</td>
            <td>{item?.ConfirmPassword}</td>
            <td>
              <button onClick={() => handleEditClick(item)}>Edit</button>
              <Delete userId={item.UserId} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
