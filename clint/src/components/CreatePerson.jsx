import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePerson = () => {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(values).every((value) => value.trim() !== "")) {
      axios
        .post("http://localhost:3030/create", values)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.error(err));
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="d-flex align-items-center flex-column mt-3">
      <h1>Add Person</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="fname" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="Enter first name"
            name="fname"
            value={values.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="Enter last name"
            name="lname"
            value={values.lname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter phone number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            name="address"
            value={values.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePerson;
