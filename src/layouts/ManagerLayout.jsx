import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const ManagerLayout = () => {
  return (
    <div className='relative'>
      <header className='flex justify-center items-center bg-gradient-to-r from-blue-900 to-slate-500 h-[200px] md:h-[300px] flex-col'>
          
          <NavLink to={'/'} className='hover:underline text-slate-800'>go back to homepage</NavLink>
      </header>
      <Outlet />
    </div>
  )
}
