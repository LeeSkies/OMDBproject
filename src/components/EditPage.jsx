import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../features/restaurantssSlice'
import { useNavigate, useParams } from 'react-router-dom'

export const EditPage = () => {

  const nav = useNavigate()
  const dispatch = useDispatch()
  const { id, req } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {dispatch(req=='edit' ? actions.editRestaurant({req, r:{...r, ...data}, id}) : actions.editRestaurant({req, r:{...data}})) && nav('/')}
  let r;
  if (req === 'add') {
    r = {name: '',  city: '', price: '', cuisine: '', description: ''};
  }
    else if (req === 'edit') {
    r = useSelector(state => state.restaurants.restaurants);
  } else {
    r = null;
  }

  return (
    r && <section className='flex justify-center items-center container left-0 right-0 mx-auto rounded absolute bg-gradient-to-l from-blue-800 to-slate-400 top-[85%] overflow-y-hidden p-8' onScrollCapture={(e) => e.preventDefault()}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col container md:w-4/6 [&_input]:bg-slate-300 [&_input]:p-4 [&_input]:rounded [&_label]:text-slate-700 [&_label]:pt-5 gap-4'>
            <label htmlFor="name">Name</label>
            <input type="text" required={req === 'add'} minLength={2} defaultValue={r.name} {...register('name')} />

            <label htmlFor="city">City</label>
            <input type="text" required={req == 'ADD'} defaultValue={r.city} id="city" />

            <label htmlFor="price">Price</label>
            <input type="text" required={req == 'ADD'} defaultValue={r.price} id="price" {...register('price', { required: true, pattern: /^\$\d+$/i })} />
            {errors.price?.type === 'pattern' && <span>This field should only contain numbers and the dollar sign ($)</span>}

            <label htmlFor="cuisine">Cuisine</label>
            <input type="text" required={req == 'ADD'} defaultValue={r.cuisine} id="cuisine" {...register('cuisine')} />

            <label htmlFor="description">Description</label>
            <textarea type="text" required={req == 'ADD'} className='p-4 h-[100px] bg-slate-300 rounded w-full' minLength={10} defaultValue={r.description} id="description" {...register('description')} />

            <label htmlFor="url">Add image with URL</label>
            <input type="url" name="" id="url" {...register('url')} />
            <button className='bg-rose-500 p-4 mt-6'>Save changes</button>
        </form>
    </section>
  )
}
