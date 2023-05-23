import React, { useState } from "react";
import axios from "axios";

export default function Axiospost() {
  const data = { Name: "", Email: "", Age: "" };
  const [inputData, setinputData] = useState(data);

  const handleChange = (e) => {
    setinputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/createstudent", inputData)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <label className="mb-4">
        Name:
        <input
          className="border border-gray-300 rounded px-2 py-1"
          name="Name"
          type="text"
          value={inputData.Name}
          onChange={handleChange}
        />
      </label>
      <label className="mb-4">
        Email:
        <input
          className="border border-gray-300 rounded px-2 py-1"
          name="Email"
          type="email"
          value={inputData.Email}
          onChange={handleChange}
        />
      </label>
      <label className="mb-4">
        Age:
        <input
          className="border border-gray-300 rounded px-2 py-1"
          name="Age"
          type="number"
          value={inputData.Age}
          onChange={handleChange}
        />
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}
