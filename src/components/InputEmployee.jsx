import React from "react";
import { v4 as uuid } from "uuid";

const InputEmployee = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    address: "",
    department: "",
    employeeId: "",
    salary: "",
    isMarried: "",
  });
  const { name, age, address, department, employeeId, salary, isMarried } =
    formData;

  const handleChange = (event) => {
    let { name, value, checked, type } = event.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    fetch("http://localhost:3000/Employees", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
  };

  return (
    <div>
      <h3>Enter Employee Details</h3>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={age}
          onChange={handleChange}
        />{" "}
        <br />
        <textarea
          type="address"
          placeholder="Address"
          name="address"
          value={address}
          onChange={handleChange}
        />{" "}
        <br />
        <select onChange={handleChange} name="department" value={department}>
          <option>Department</option>
          <option value="Production Department">Production Department</option>
          <option value="Marketing and Sales Department">
            Marketing and Sales Department
          </option>
          <option value="Purchasing Department">Purchasing Department</option>
          <option value="Account Department">Account Department</option>
          <option value="General Management">General Management</option>
          <option value="IT Department">IT Department</option>
        </select>{" "}
        <br />
        <input
          type="text"
          placeholder="Employee ID"
          name="employeeId"
          value={employeeId}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Salary"
          name="salary"
          value={salary}
          onChange={handleChange}
        />
        <br />
        <label>
          Married:
          <input
            type="checkbox"
            name="isMarried"
            checked={isMarried}
            onChange={handleChange}
            className="checkbox"
          />
        </label>
        <br />
        <input type="submit" value="SUBMIT FORM" onClick={handleSubmit} />
      </form>
    </div>
  );
};
export default InputEmployee;
