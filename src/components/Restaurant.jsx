import React, { useEffect, useState } from 'react'
import * as hi2 from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { actions } from '../features/restaurantssSlice'

export const Restaurant = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { restaurants : r } = useSelector(state => state.restaurants)

    useEffect(() => {
        dispatch(actions.getSingleRestaurant(id))
    }, [])

  return (
    r && <article className={`container md:w-4/6 flex max-md:flex-col absolute border-black md:gap-8 justify-between mx-auto left-0 right-0 top-[85%] rounded`}>
        <section className='bg-slate-200 rounded'>
            <nav className='p-4 flex items-center'>
                <NavLink to={'/'} className='flex flex-col items-center'>
                    <hi2.HiHome className='h-6 w-6' />
                    <p>home</p>
                </NavLink>
                <NavLink to={`/restaurant/e/edit/${id}`} className='px-5 flex flex-col items-center'>
                    <hi2.HiPencil className='h-5 w-5' />
                    <p>edit</p>
                </NavLink>
            </nav>
            {r?.images?.length &&
            <section className='p-4'>
                <h1 className='text-5xl font-bold border-y-slate-300 border-y p-4'>{r.name}</h1>
                <p className='py-10'>{r.description}</p>
                <p className='font-bold text-2xl'>{r.images.length} photos</p>
                <div className='w-full flex p-4'>
                    {r.images.map((image, i) => (
                        <img src="image" key={i} alt={`image ${i}`} />
                    ))}
                </div>
            </section>}
        </section>
        <form className='bg-slate-200 p-4 rounded flex flex-col gap-2 h-fit'>
            <h1 className='text-xl font-bold'>Make a Reservation</h1>
            <p>Party size</p>
            <input className='p-2 bg-inherit border border-stone-400 focus:outline-none' placeholder='1 person' type="text" />
            <figure className='flex [&_input]:p-2 gap-2 justify-between [&_input]:bg-inherit [&_input]:border [&_input]:border-stone-400'>
                <input type="date" /><input type="time" />
            </figure>
            <button className='bg-rose-500 p-4 mt-4 rounded'>Reserve</button>
        </form>
    </article>
  )
}
