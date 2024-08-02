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
        console.log('Edit id',id);
    }
    const handleDelete=(id)=>{
        console.log('Delete id',id);
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
