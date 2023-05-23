import React, { useEffect, useState } from "react";
import axios from "axios";
import Axiospost from "./Axiospost";

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/getStudent").then((response) => {
      console.log(response);
      setStudents(response.data.data);
    });
  }, []);

  return (
    <div className="w-full h-screen bg-blue-200 text-center">
      <Axiospost />
      <h1 className="text-white text-center text-4xl font-bold mb-4">
        Students
      </h1>
      {students.map((data, index) => (
        <div key={index} className="mb-4">
          <h1 className="text-2xl leading-tight hover:gradient-text-blue text-blue-800">
            {data.Name}
          </h1>
          <h2 className="text-blue-600">{data.Email}</h2>
        </div>
      ))}
    </div>
  );
}
