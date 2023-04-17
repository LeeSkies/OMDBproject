import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../features/restaurantssSlice'
import { useIsMounted } from '../hooks/useIsMounted'



export const Home = () => {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();
  const { restaurants } = useSelector(state => state.restaurants)

  useEffect(() => {
    dispatch(actions.getRestaurants())
  }, [])

  useEffect(() => {
    searchParams.get('s') ?
      dispatch(actions.searchRestaurants(searchParams.get('s'))) :
      dispatch(actions.getRestaurants())
  },[searchParams])
console.log(restaurants)
  return (
    <section className='w-11/12 md:w-[80%] mx-auto my-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
      {restaurants?.length > 0 && restaurants.map((r, i) => (
        <article key={i} className='flex flex-col grow hover:scale-[105%] transition-all duration-300 ease-in-out hover:shadow-xl p-2 border'>
          <img src={r.images[0]} className='w-[300px]' alt="" />
          <div className='flex pt-2 font-semibold items-center justify-between'>
            <h1 className='text-lg'>{r.name}</h1>
            <p>{r.price}</p>
          </div>
          <p className='text-lg font-thin pb-3'>{r.city}</p>
          <p>{r.description.substring(0, 70)}...</p>
          <i className='grow'></i>
          <NavLink to={`/restaurant/${r.id}`} className='italic py-3 hover:text-slate-600'>Click for more details</NavLink>
        </article>
      ))}
    </section>
  )
}
