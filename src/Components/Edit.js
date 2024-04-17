import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    userid: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { userid, email, password, confirmPassword } = formData;

  useEffect(() => {
    if (location.state && location.state.data) {
      const { UserId, Email, Password, ConfirmPassword } = location.state.data;
      setFormData({
        userid: UserId,
        email: Email,
        password: Password,
        confirmPassword: ConfirmPassword,
      });
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("request", "UpdateUser");
    formData.append("userid", userid);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmpassword", confirmPassword);

    console.log(formData);

    const response = await axios.post(
      "http://192.168.100.12/practice/crudapi/index.php",
      formData
    );
    console.log(response);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="title">
          <h1>Update User</h1>
          <form onSubmit={handleUpdate}>
            <div className="form">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="input"
                id="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
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
                value={formData.password}
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
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <input
                type="hidden"
                value={formData.userid}
                name="userid"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-primary">
              Update
            </button>
            <button
              onClick={() => handleBack()}
              type="submit"
              className="btn-primary"
            >
              Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
