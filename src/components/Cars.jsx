import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'

export const Cars = () => {

const [cars, setCars] = useState([])
const [categories, setCategories] = useState([])
const [display, setDisplay] = useState([])

const select = useRef()

const handleChange = () => {
  if(select.current.value == 'all') {
    setDisplay([...cars])
    return
  }
  const newDisplay = cars.filter(car => car.category == select.current.value)
  setDisplay([...newDisplay])
}

useEffect(() => {
    const fetchData = async () => {
        const { data } = await axios.get('https://cars-otdf.onrender.com/cars?perPage=99')
        const categories = Array.from(new Set(data.map((car => car.category))))
        setCars([...data])
        // console.log(data)
        setCategories([...categories])
        setDisplay([...cars])
        console.log(cars)
    }
    fetchData()
},[])

  return (
    cars && <div className='flex flex-col items-center w-full pb-8'>
      <select ref={select} onChange={() => handleChange()} defaultValue={'All'} className='m-5 w-2/5 appearance-none select select-bordered' name="" id="">
        <option className='' value='all'>Category</option>
         {categories.map((c, i) => (
          <option className='text-l' value={c} key={i}>{c}</option>
        ))}
      </select>
      
      <section className='grid grid-cols-4 gap-4'>
          {display.map((car, i) => (
            <article key={i} className='card w-96 bg-slate-200 shadow-xl border overflow-clip'>
              <button className='w-full h-full opacity-0 text-slate-200 duration-700 hover:block absolute bg-black hover:opacity-90 p-5 text-left text-xl'>{car.info}</button>
            <figure><img className='h-[254.5px]' src={car.img_url} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {car.model}
                <div className="badge bg-blue-500 border-none">$ {car.price}</div>
              </h2>
              <p>{car.info.substring(0, car.info.lastIndexOf(' ', 80))}...</p>
              <div className="card-actions justify-end pt-2">
                <div className="badge badge-outline">{car.year}</div> 
                <div className="badge badge-outline">{car.company}</div>
              </div>
            </div>
          </article>
          ))}
      </section>
      <button onClick={()=> window.scrollTo({top: 0, left: 0, behavior: "smooth"})} className={`btn rounded-full w-12 text-xl bottom-8 fixed opacity-70 hover:opacity-100`}>^</button>
    </div>
  )
}

