import React, { useEffect, useState } from "react";
import EmployeeTable from "./EmployeesTable";
const ShowEmployee = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/Employees")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        setError(true);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h3>Employee Details</h3>
      {loading ? (
        <h1>Loading.....</h1>
      ) : error ? (
        <h1>Someting Wrong Happned</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Employee ID</th>
              <th>Salary</th>
              <th>Married</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <EmployeeTable employee={employee} key={employee.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowEmployee;
