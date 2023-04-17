import React from 'react'
import { NavLink } from 'react-router-dom'

export const OptModal = () => {
  return (
    <section className='fixed flex justify-center items-center w-full h-screen overflow-y-hidden bg-black opacity-50' onScrollCapture={(e) => e.preventDefault()}>
        <section className='w-full md:container p-4 flex items-center'>
            <NavLink className='w-1/3 bg-slate-400 h-[400px]' />
            <NavLink className='w-1/3 bg-slate-400 h-[400px]' />
        </section>
    </section>
  )
}
