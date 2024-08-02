import React from 'react'

export default function Header({setisAdding}) {
  return (
    <div>
      <header>
        <h1>Employee Management System</h1>
        <div style={{marginTop:'30px',marginBottom:'18px'}}>
          <button onClick={()=>setisAdding(true)}className='round-button'>Add Employee</button>
        </div>
      </header>
    </div>
  )
}

