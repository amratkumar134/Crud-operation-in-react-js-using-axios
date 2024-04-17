import React from "react";
import axios from "axios";

function Delete({ userId }) {
  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("request", "DeleteUser");
    formData.append("userid", userId);

    const response = await axios.post(
      "http://192.168.100.12/practice/crudapi/index.php",
      formData
    );
    console.log(response);
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default Delete;
