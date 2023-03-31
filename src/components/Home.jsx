import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as hi2 from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { Slide } from './Slide'

export const Home = () => {

  // states
  const [movies, setMovies] = useState([])

  const images = [
    'https://drive.google.com/uc?export=view&id=15-RfcqBicxorLDACoYIza5UU3KjZTsfM',
    'https://drive.google.com/uc?export=view&id=1WR74cFsc_dSpZ5VwlqpB7mZ0SYCDHB29',
    'https://drive.google.com/uc?export=view&id=1kYb1g1zXt_ol0VqBbB8_sAOz8Xgd16kR',
    'https://drive.google.com/uc?export=view&id=1Co-6LN3Z_yOgYDQjSEw7N5pXQru9zZie',
    'https://drive.google.com/uc?export=view&id=1Ht7EVTqoI_eQW1AwA7NDkI8Iz8ecv3Ci'
  ]

  // functions
  const fetchMovies = async () => {
    const { data } = await axios.get('https://www.omdbapi.com/?s=heist&apikey=cfcc70f2')
    setMovies(data.Search)
  }

  useEffect(() => {
    fetchMovies()
  },[])

  return (
    <div className='pb-40'>
      <Slide images={images} Right={<hi2.HiChevronRight className='h-10 w-10' />} Left={<hi2.HiChevronLeft className='h-10 w-10' />} Time={3000} />
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
