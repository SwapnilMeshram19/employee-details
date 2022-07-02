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
                <td>Sr.No</td>
                <td>Name</td>
                <td>Age</td>
                <td>Address</td>
                <td>Department</td>
                <td>Employee ID</td>
                <td>Salary</td>
                <td>Married</td>
            </thead>
            {
                data.map((employee) => (
                    <EmployeeTable employee={employee} key={employee.id} />
                  ))
            }

        </table>
        
      )}
    </div>
  );
};

export default ShowEmployee;
