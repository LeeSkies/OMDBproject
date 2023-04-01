import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as hi2 from 'react-icons/hi2'
import { NavLink, useParams } from 'react-router-dom'
import { Slide } from './Slide'
import { images } from '../assets/SlideDetails'
import { YearsScale } from './YearsScale'

export const Home = () => {

  const { YYYY, SearchQ } = useParams()

  // states
  const [movies, setMovies] = useState([])

  // functions
  const fetchMovies = async () => {
    const { data } = await axios.get(`https://www.omdbapi.com/?s=${ SearchQ ? SearchQ : 'bank' }${YYYY ? '&y=' + YYYY : ''}&apikey=cfcc70f2`)
    setMovies(data.Search)
  }

  useEffect(() => {
    fetchMovies()
    document.documentElement.scrollTop = 0;
  },[YYYY, SearchQ])

  return (
    <div className='pb-40'>
      {!YYYY && !SearchQ && <Slide images={images} Right={<hi2.HiChevronRight className='h-10 w-10' />} Left={<hi2.HiChevronLeft className='h-10 w-10' />} Time={3000} />}
      <YearsScale />
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
