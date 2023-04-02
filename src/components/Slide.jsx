import React, { useEffect, useState } from 'react'
import * as hi2 from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { SlideDetails } from '../assets/SlideDetails'

export const Slide = ({ images, Right, Left, Button, Time }) => {
  
  // states
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, Time? Time : 7000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <section className='w-full overflow-hidden bg-transparent relative h-auto xl:h-[90vh]'>
      <div className='absolute w-full h-full bg-transparent flex justify-between items-center p-10 z-10'>
        <button
          onClick={() =>
            setIndex((index) => (index === 0 ? images.length - 1 : index - 1))
          }
          className='rounded-full p-4 opacity-70 hover:opacity-100'
        >
          {Left? Left : <hi2.HiChevronLeft className='h-10 w-10' />}
        </button>
        <button
          onClick={() => setIndex((index) => (index + 1) % images.length)}
          className='rounded-full p-4 opacity-70 hover:opacity-100'
        >
          {Right? Right : <hi2.HiChevronRight className='h-10 w-10' />}
        </button>
      </div>
      <article
        className='h-full flex overflow-hidden items-top transition-transform duration-1000'
        style={{
          transform: `translateX(-${index * 100/images.length}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, i) => (
            <img key={i}
              src={image}
              style={{width: `${100/images.length}%`}}
              alt={`Slider image ${i + 1}`}
            />
        ))}
      </article>
      <div className='absolute w-screen bg-transparent z-40 bottom-8 h-[20px] flex justify-center items-center'>
      <NavLink to={`/movie/${SlideDetails[index].imdbID}`} className='hover:text-slate-700 duration-300 absolute bottom-1/4 p-4 md:p-8 rounded text-slate-300  md:text-black left-4 sm:left-4'>
          <h1 className='text-xl font-bold md:text-4xl'>{SlideDetails[index].Title}</h1>
          <div className="flex space-x-1 pt-2">
            {[...Array(10)].map((_, i) => i<SlideDetails[i]?.imdbRating && (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 sm:h-5 w-4 sm:w-5 fill-current ${i < SlideDetails[i]?.imdbRating ? 'text-yellow-400' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
              </svg>
            ))}
            {(SlideDetails[index]?.imdbRating * 10) % 10 >=3 &&
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 sm:h-5 w-4 sm:w-5 fill-current text-yellow-400`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792" />
              </svg>
            }
          </div>
          <p className='mt-2 text-sm sm:text-xl z-[60]'>Click for more details</p>
      </NavLink>
        {images.map((image, i) => 
          {return Button ? Button : <button key={i} onClick={() => setIndex(i)} className={`mx-2 z-50 bg-slate-300 rounded-full ${i == index? ' border-[2px] border-slate-500 w-[17px] h-[17px]' : 'w-[15px] h-[15px]'}`}></button>}
        )}
      </div>
    </section>
  );
}