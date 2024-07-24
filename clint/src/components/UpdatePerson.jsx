import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePerson = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const res = await axios.get(`http://localhost:3030/getrecord/${id}`);
        if (res.data && res.data.length > 0) {
          setValues(res.data[0]);
        } else {
          console.error("No data found for the given ID");
        }
      } catch (err) {
        console.error("Error fetching person data:", err);
      }
    };

    fetchPerson();
  }, [id]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3030/update/${id}`, values);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.error("Error updating person:", err);
    }
  };

  return (
    <div className="d-flex align-items-center flex-column mt-3">
      <h1>Update Person</h1>
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePerson;
