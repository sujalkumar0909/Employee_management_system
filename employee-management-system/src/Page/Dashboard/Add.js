import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Add({ employees, setEmployees, setisAdding }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = e => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All fields are required',
        showConfirmButton: true,
      });
    }
    const id=employees.length+1;
  
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    }
    employees.push(newEmployee);
    setEmployees(employees);
    setisAdding(false);

    Swal.fire({
      icon:'success',
      title:"Added successfully",
      text:`${firstName} ${lastName} has been added to the list`,
      showConfirmButton:false,
      timer:1000
    })
  };

  return (
    <div classNmae="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        
        <label htmlFor="firstName">First Name</label>
        <input
        id="firstName"
        type="text"
        ref={textInput}
        name="firstName"
        value={firstName}
        onChange={e=>setFirstName(e.target.value)}/>

        <label htmlFor="lastName">Last Name</label>
        <input
         id="lastName"
         type="text"
         name="lastName"
         value={lastName}
         onChange={e => setLastName(e.target.value)}/>   

        <label htmlFor="email">Email</label>
        <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={e=>setEmail(e.target.value)}/>

        <label htmlFor="salary">Salary</label>
        <input
        id="salary" 
        type="number"
        name="salary"
        value={salary}
        onChange={e=>setSalary(e.target.value)}/>
        <label htmlFor="date">Date</label><input 
        id="date" 
        type="date"
        name="date"
        value={date}
        onChange={e=>setDate(e.target.value)}/>
        <div style={{marginTop:'30px'}}>
          <input type="submit" value="Add"/>
          <input
          style={{marginLeft:'12px'}}
          className="muted-button"
          type="button"
          value="Cancel"
          onClick={()=>setisAdding(false)}/>
        </div>
      </form>
    </div>                        
  )
}
