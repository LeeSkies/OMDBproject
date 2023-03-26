import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as hi2 from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { Slide } from './Slide'

export const Home = () => {

  // states
  const [movies, setMovies] = useState([])

  // functoins
  const fetchMovies = async () => {
    const { data } = await axios.get('https://www.omdbapi.com/?s=heist&apikey=cfcc70f2')
    setMovies(data.Search)
  }

  useEffect(() => {
    fetchMovies()
  },[])

  return (
    <div className='pb-40'>
      <Slide />
      <section className='grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 justify-items-center w-11/12 max-sm:w-[90%] mx-auto mt-20'>
        {movies.map((movie, i) => (
          <article key={i} className='bg-gray-500 relative w-full rounded-md overflow-clip'>
            <NavLink to={`movie/${movie.imdbID}`} className='absolute bg-black w-full h-full opacity-0 hover:opacity-90 flex justify-center items-center duration-200'><hi2.HiPlay className='h-16 text-gray-700 w-16' /></NavLink>
            <img src={movie.Poster} className='w-full aspect-[9/14]' alt="" />
            <div></div>
          </article>
        ))}
      </section>
    </div>
  )
}
