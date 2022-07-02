import React from "react";

const EmployeeTable =({employee})=>{

    return (
        <tbody>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.address}</td>
            <td>{employee.department}</td>
            <td>{employee.employeeId}</td>
            <td>{employee.salary}</td>
            <td>{employee.isMarried==""?"No":"Yes"}</td>
        </tbody>
    )
}


export default EmployeeTable;