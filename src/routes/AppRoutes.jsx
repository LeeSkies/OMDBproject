import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from '../components/Home'
import { Movie } from '../components/Movie'
import { Header } from '../layouts/Header'
import { SOS } from './SOS'

export const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Header />} errorElement={<SOS />}>
           <Route index element={<Home />}/>
           <Route path='year/:YYYY' element={<Home />}/>
           <Route path='search/:SearchQ' element={<Home />}/>
           <Route path='movie/:id' element={<Movie />} />
        </Route>
        
    )
)

  return (
    <RouterProvider router={router} />
  )
}
