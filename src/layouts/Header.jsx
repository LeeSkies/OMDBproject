import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../header.css'

export const Header = () => {
  return (
    <div>
      <header className='w-full shadow-xl bg-gray-200 header-logo text-6xl text-gray-900 p-4'>VOODOO</header>
      <Outlet />
    </div>
  )
}
