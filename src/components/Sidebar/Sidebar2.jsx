import React from 'react'
import './Sidebar2.css'
import { NavLink } from 'react-router-dom'

function Sidebar2() {
  return (
    <>
    <div  className='asid mt-5'>
        <div className='ul d-flex justify-content-between'>
            <NavLink to='/' className='l1'><h6></h6><i class="fa-solid fa-house text-dark" ></i></NavLink>
            <NavLink to='/about' className='l2'><h6></h6><i class="fa-solid fa-user text-dark" ></i></NavLink>
            <NavLink to='/services' className='l5'><h6></h6><i class="fa-solid fa-layer-group text-dark" ></i></NavLink>
            <NavLink to='portfolio' className='l3'><h6></h6><i class="fa-solid fa-briefcase text-dark" ></i></NavLink>
            <NavLink to='/contact' className='l4'><h6></h6><i class="fa-solid fa-envelope text-dark" ></i></NavLink>
        </div>
    </div>
   </>
  )
}

export default Sidebar2