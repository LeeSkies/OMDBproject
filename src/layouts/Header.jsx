import axios from 'axios'
import React, { useRef, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import '../header.css'

export const Header = () => {

  const navigate = useNavigate()
  const inputRef = useRef()

  // states
  const [inputSearch, setInputSearch] = useState()
  const [inputDiv, setInputDiv] = useState(false)

  // functions
  const handleChange = async () => {
    if (inputRef.current.value.length < 4) {
      setInputSearch([])
      setInputDiv(false)
      return
    } 
    setInputDiv(true)
    const { data } = await axios.get(`https://www.omdbapi.com/?s=${inputRef.current.value}&apikey=cfcc70f2`)
    setInputSearch(data.Search)
  }

  return (
    <div>
      {inputDiv && <div onClick={() => {setInputSearch([]), setInputDiv(false)}} className='absolute w-full h-full z-20'></div>}
      <header className='w-full flex justify-between items-center sm:absolute top-0 z-20 relative bg-transparent text-gray-900 p-4'>
        <button onClick={() => navigate('/')} className='header-logo hover:animate-pulse sm:text-6xl text-4xl font-extrabold font-outline-2'>VOODOO</button>
        <section className='w-[63vw] md:w-[33vw]'>
          <input ref={inputRef} onChange={handleChange} className={`p-2 w-full outline-none ${inputRef.current?.value.length > 0? 'bg-stone-300' : 'bg-transparent border border-stone-300'}`} type="text" placeholder='Search...' />
          <div className='absolute w-[63vw] md:w-[33vw] z-20 rounded-b overflow-hidden'>
            {inputSearch && inputSearch.map((movie, i) =>
              <NavLink to={`movie/${movie.imdbID}`} onClick={() => {inputRef.current.value = '', setInputSearch([])}} key={i} className='w-full p-2 bg-stone-300 hover:bg-stone-200 h-[83px] flex items-center'>
                <img src={movie.Poster} alt="???" className='w-[50px]' />
                <div className='p-2'>
                  <h1>{movie.Title}</h1>
                  <p>{movie.Year}</p>
                </div>
              </NavLink>
            )}
          </div>
        </section>
        </header>
      <Outlet />
    </div>
  )
}