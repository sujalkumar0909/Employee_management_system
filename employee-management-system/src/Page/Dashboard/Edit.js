import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Edit({ employees, selectedEmployee, setEmployees, setisEditing }) {
  const id = selectedEmployee.id;
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: "All fields are required",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

   for(let i=0;i<employee.length;i++)
   {
    if(employee[i].id===id){
      employees.splice(i,1,employee);
      break;
    }
   }

    setEmployees(employees);
    setisEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Employee updated successfully',
      text: `${employee.firstName} ${employee.lastName} data has been updated`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlor="firstName">First Name</label>
        <input
        id="firstName"
        type="text"
        name="firstName"
        value={firstName}
        onChange={e=>setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
        id="lastName"
        type="text"
        name="lastName"
        value={lastName}
        onChange={e=>setLastName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        />

        <label htmlFor="salary">Salary</label>
        <input
        id="salary"
        type="number"
        name="salary"
        value={salary}
        onChange={e=>setSalary(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
        id="date"
        type="date"
        name="date"
        value={date}
        onChange={e=>setDate(e.target.value)}
        />
        <div style={{marginTop:'30px'}}>
          <input type="submit" value="Update"/>
          <input
          style={{marginLeft:'12px'}}
          className="muted-button"
          type="button"
          value="Cancel"
          onClick={()=>setisEditing(false)}
          />
        </div>
      </form>
    </div>
  )
}
