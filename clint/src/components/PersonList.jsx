import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    try {
      const res = await axios.get("http://localhost:3030");
      if (Array.isArray(res.data)) {
        setPersons(res.data);
      } else {
        console.error("Data received is not an array:", res.data);
        setPersons([]);
      }
    } catch (err) {
      console.error("Error fetching persons:", err);
      setPersons([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/delete/${id}`);
      fetchPersons();
    } catch (err) {
      console.error("Error deleting person:", err);
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/create" className="btn btn-success mb-3 ">
        Create Person
      </Link>
      {persons.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.fname}</td>
                <td>{person.lname}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.address}</td>
                <td>
                  <Link
                    to={`/update/${person.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    Update
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(person.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>No Records</h2>
      )}
    </div>
  );
};

export default PersonList;
