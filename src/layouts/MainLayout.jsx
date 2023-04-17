import React, { useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { OptModal } from '../components/OptModal';

export const MainLayout = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [modal, setModal] = useState(false)
  
  const inputRef = useRef()

  return (
    <div className={`${modal ? 'h-screen overflow-y-hidden' : ''}`}>
      {modal && <OptModal />}
        <header className='flex justify-center items-center bg-gradient-to-r from-blue-900 to-slate-500 h-[200px] md:h-[300px] flex-col'>
          <section className='p-4'>
            <h1 className='text-slate-100 text-2xl sm:text-4xl px-2 pb-6 md:pb-8 font-bold'>Find your table for any occasion</h1>
            <article className='flex items-center w-full justify-center'>
              <input onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  inputRef.current.value ?
                  setSearchParams({
                    s: inputRef.current.value
                  }) :
                  setSearchParams({})
                }
              }
            }
              type="text" ref={inputRef} className='mx-2  p-3 rounded grow' placeholder='State, city or town' />
              <button onClick={() => {
                inputRef.current.value ?
                setSearchParams({
                  s: inputRef.current.value
                }) :
                setSearchParams({})
              }} className='bg-rose-500 mx-2 p-3 rounded'>Let's Go</button>
            </article>
          </section>
      </header>
        <Outlet />
    </div>
  )
}
