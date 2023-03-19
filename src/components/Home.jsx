import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as hi2 from 'react-icons/hi2'

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
    <div>
      <section className='grid grid-cols-4 gap-4 justify-items-center mx-auto my-0 container'>
        {movies.map((movie, i) => (
          <article key={i} className='bg-gray-500'>
            <button className='relative bg-slate-200 w-full h-full hidden opacity-0 hover:flex hover:opacity-100'><hi2.HiPlay /></button>
            <img src={movie.Poster} className='w-full' alt="" />
            <div></div>
          </article>
        ))}
      </section>
    </div>
  )
}
