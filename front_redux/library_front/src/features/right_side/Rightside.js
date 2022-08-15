import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Rightside = () => {


  return (
    <div className="right">
      <h1>my book shop</h1>
      <Link to="/shop">shop</Link>{' | '}
      <Link to="/cart">cart</Link>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  )
}

export default Rightside
