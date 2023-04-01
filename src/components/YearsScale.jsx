import React from 'react'
import '../years.css'
import { NavLink, useNavigate } from 'react-router-dom';

export const YearsScale = () => {

    const yearsSelect = Array.from({length: 21} , (_, i) => 1990 + i)
    const yearsDisplay = Array.from({length: 14}, (_, i) => 2010 + i);

    const navigate = useNavigate()

    // functions
    const handleChange = (value) => {
        navigate(`/year/${value}`)
    }

  return (
    <section className='w-full years flex text-slate-300 xl:text-xl items-center m-4 lg:justify-center'>
        <label className='max-xl:hidden mr-4' htmlFor="selecttt">Pick a year to display:</label>
        <select onChange={(e) => handleChange(e.target.value)} name="" id="selecttt" className='text-slate-900 px-4'>
            {yearsSelect.map(year =>
                <option key={year} value={year}>{year}</option>    
            )}
        </select>
        <article>
            {yearsDisplay.map(year => 
                <NavLink to={`/year/${year}`} key={year} className='p-4 year hover:scale-75 max-lg:hidden duration-300 ease-in-out'>{year}</NavLink>
            )}
        </article>
    </section>
  )
}
