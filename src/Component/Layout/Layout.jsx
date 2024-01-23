import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import { Offline } from "react-detect-offline";

export default function Layout() {
  return <>
  
  <NavBar />
  <div className="container">
  <Outlet></Outlet>
  </div>
    <Offline>
  <div className='network'>
      <i className='fas fa-wifi me-3'></i>
      You are offline now (surprise!)
  </div>
      </Offline>


</>
}
