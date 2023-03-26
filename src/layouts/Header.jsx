import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import '../header.css'

export const Header = () => {

  const navigate = useNavigate()

  return (
    <div>
      <header className='w-full absolute top-0 z-50 header-logo sm:text-6xl text-2xl font-extrabold font-outline-2 bg-transparent text-gray-900 p-4'>
        <button onClick={() => navigate('/')} className='hover:animate-pulse'>VOODOO</button>
        </header>
      <Outlet />
    </div>
  )
}
