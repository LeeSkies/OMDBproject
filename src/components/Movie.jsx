import axios from 'axios'
import React, { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import * as hi2 from 'react-icons/hi2'

export const Movie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const fetchMovies = async () => {
    const { data } = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=cfcc70f2`)
    setMovie(data)
  }

  const stars = useMemo( () => new Array(10).fill(), [])

  useEffect(() => {
    fetchMovies()
  }, [])
  return (
    movie && <div className='h-screen w-full flex justify-center items-center text-slate-400'>
        <section className='flex md:w-8/12 w-10/12 max-sm:w-full border-black justify-between max-sm:flex-col max-sm:mb-20'>
            <figure className='xl:w-1/3 w-1/2 max-sm:w-full rounded overflow-clip'>
                <img src={movie.Poster} className='w-full' />
            </figure>
            <article className='w-full sm:w-1/2 max-sm:mt-8 pb-4 px-4 flex flex-col h-full'>
                <h1 className='text-4xl pb-4'>{movie.Title}</h1>
                <p className='my-1 text-sm italic'>{movie.Genre}</p>
                <p className='my-2'>{movie.Plot}</p>
                <p className='py-2'>Starring: {movie.Actors}</p>
                <p className='pt-16 text-sm font-serif italic'>{movie.Released}</p>
                <div className="flex space-x-1 pt-2">
                    {[...Array(10)].map((_, i) => i<movie.imdbRating && (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 fill-current ${i < movie.imdbRating ? 'text-yellow-400' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
                      </svg>
                    ))}
                    {(movie.imdbRating * 10) % 10 >=3 &&
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 fill-current text-yellow-400`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792" />
                      </svg>
                    }
                </div>
            </article>
        </section>
    </div>
  )
}
