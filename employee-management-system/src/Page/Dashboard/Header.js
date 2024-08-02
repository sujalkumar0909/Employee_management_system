import React from 'react'

export default function Header({setisAdding}) {
  return (
    <div>
      <header>
        <h1>Employee Management System</h1>
        <div>
          <button onClick={()=>setisAdding(true)}className='round-button'>Add Button</button>
        </div>
      </header>
    </div>
  )
}

