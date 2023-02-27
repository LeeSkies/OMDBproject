import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className='navbar flex justify-end bg-gray-600'>
        <figure className='px-2'><NavLink className={'btn'} to={'/'}>Home</NavLink></figure>
        <figure className='px-2'><NavLink className={'btn'} to={'/cars'}>Cars</NavLink></figure>
        {/* <div className='dropdown dropdown-hover dropdown-end'>
        <label tabIndex={0} className="btn m-1">Hover</label>
            <ul tabIndex={0} className={"dropdown-content menu p-2 shadow bg-gray-400 rounded-box w-52"}>
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div> */}
    </nav>
  )
}
