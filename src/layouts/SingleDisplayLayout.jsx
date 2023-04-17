import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams, useSearchParams } from 'react-router-dom'
import { actions } from '../features/restaurantssSlice';

export const SingleDisplayLayout = () => {

  const { restaurants } = useSelector(state => state.restaurants)
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams()
  const dispatch = useDispatch()
  
  const inputRef = useRef()
  
  useEffect(() => {
    dispatch(actions.getSingleRestaurant(id))
  }, [searchParams])

  return (
    <div className='relative'>
      <header className='flex justify-center items-center bg-gradient-to-r from-blue-900 to-slate-500 h-[200px] md:h-[300px] flex-col'>
          <h1 className='p-4 text-3xl md:text-5xl font-bold text-slate-100'>{restaurants.name}</h1>
      </header>
      <Outlet id={id} />
    </div>
  )
}