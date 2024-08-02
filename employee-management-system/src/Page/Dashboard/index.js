import React,{useState} from 'react'
import {employeesData} from '../../data';
import Swal from 'sweetalert2';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

export default function Dashboard() {
    const [employees,setEmployees]=useState(employeesData);
    const [selectedEmployee,setSelectedEmployee]=useState(null);
    const [isEditing,setisEditing]=useState(false);
    const [isAdding,setisAdding]=useState(false);

    const handleEdit=(id)=>{
        const [employee]=employees.filter(employee=>employee.id===id);
        setSelectedEmployee(employee);
        setisEditing(true);
    }

    const handleDelete=(id)=>{
       Swal.fire({
        icon:'warning',
        title:'Are you sure?',
        text:`You won't be able to revert this!`,
        showCancelButton:true,
        confirmButtonText:'<span>Delete</span>',
        cancelButtonText:'<span>Cancel</span>',
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
       }).then(result=>{
        if(result.value){
            const [employee]=employees.filter(employee=>employee.id===id);
            Swal.fire({
                icon:'success',
                title:'Deleted!',
                text:`${employee.firstName} ${employee.lastName} has been deleted.`,
                showConfirmButton:false,
                timer:1000
            })
            setEmployees(employees.filter(employee=>employee.id!==id));
        }
       });
    }

  return (
    <div className="container">
        {!isAdding && !isEditing && (
            <>
            <Header
            setisAdding={setisAdding}
            />
            <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />
            </>
        )}
        {isAdding && (
            <Add
            employees={employees}
            setEmployees={setEmployees}
            setisAdding={setisAdding}
            />
        )}
        {isEditing && (
            <Edit
            employees={employees}
            selectedEmployees={selectedEmployee}
            setEmployees={setEmployees}
            setisEditing={setisEditing}
            />
        )}
    </div>
  )
}
