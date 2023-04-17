import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../features/restaurantssSlice'
import * as hi2 from 'react-icons/hi2'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

export const Manager = () => {

    const { restaurants } = useSelector(state => state.restaurants)
    const dispatch = useDispatch()
    const { id } = useParams()
    const nav = useNavigate()

    const path = window.location.href
    useEffect(() => {
        dispatch(actions.getRestaurants())
        return () => console.log('yo')
    }, [path, id])

  return (
    <section className='absolute top-[85%] left-0 pb-20 right-0 mx-auto container rounded bg-slate-100'>
    {restaurants && restaurants.map((r, i) => (
        <article className='flex p-4 justify-between border-b bg-slate-300 hover:bg-slate-500 hover:text-slate-200 items-center'>
            <h1>{r.name}</h1>
            <figcaption className='flex items-center'>
                <NavLink to={`/restaurant/e/edit/${r.id}`} className='p-2 border'><hi2.HiPencil className='h-5 w-5 mr-10' /></NavLink>
                <button onClick={() => dispatch(actions.editRestaurant({req: 'delete', id: r.id}))} className='p-2 border'><hi2.HiArchiveBox className='h-5 w-5' /></button>
            </figcaption>
        </article>
    ) )}
    <NavLink to={'/restaurant/e/add'} className='flex p-4 justify-center border-b bg-slate-300 hover:bg-slate-500 hover:text-slate-200 items-center'>
        <h1 className='text-xl'>Add New Restaurant</h1>
    </NavLink>
    </section>
  )
}
