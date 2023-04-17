import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../features/restaurantssSlice'
import { useParams } from 'react-router-dom'

export const EditPage = () => {

  const { id } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => dispatch(actions.updateRestaurant({...r, ...data}))
  const dispatch = useDispatch()
  const r = useSelector(state => state.restaurants.restaurants)

  useEffect(() => {
    dispatch(actions.getSingleRestaurant(id))
  }, [])

  return (
    r && <section className='flex justify-center items-center w-screen h-screen overflow-y-hidden bg-slate-100 p-8' onScrollCapture={(e) => e.preventDefault()}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col container md:w-4/6 [&_input]:bg-slate-300 [&_input]:p-4 [&_input]:rounded [&_label]:text-slate-700 [&_label]:pt-5 gap-4'>
            <label htmlFor="name">Name</label>
            <input type="text" minLength={2} defaultValue={r.name} id="name" />

            <label htmlFor="city">City</label>
            <input type="text" defaultValue={r.city} id="city" />

            <label htmlFor="price">Price</label>
            <input type="text" defaultValue={r.price} id="price" {...register('price', { required: true, pattern: /^\$\d+$/i })} />
            {errors.price?.type === 'pattern' && <span>This field should only contain numbers and the dollar sign ($)</span>}

            <label htmlFor="description">Description</label>
            <textarea type="text" className='p-4 h-[100px] bg-slate-300 rounded w-full' minLength={10} defaultValue={r.description} id="description" />

            <label htmlFor="url">Add image with URL</label>
            <input type="url" name="" id="url" />
            <button className='bg-rose-500 p-4 mt-6'>Save changes</button>
        </form>
    </section>
  )
}
