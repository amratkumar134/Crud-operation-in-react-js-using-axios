import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "./Table";

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("request", "Signup");
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmpassword", confirmPassword);

    const response = await axios.post(
      "http://192.168.100.12/practice/crudapi/index.php",
      formData
    );
    console.log(response);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const formData = new FormData();
    formData.append("request", "Fetchusers");

    axios
      .post("http://192.168.100.12/practice/crudapi/index.php", formData)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleEditClick = (item) => {
    navigate("/edit", { state: { data: item } });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="title">
          <h1>crud operation</h1>
          <form onSubmit={handleSubmit}>
            <div className="form">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="input"
                id="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="input"
                id="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="input"
                id="confirmPassword"
                placeholder="Enter confirm password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
       <Table data={data} handleEditClick={handleEditClick} />
      </div>
    </div>
  );
}

export default Form;
