import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Cars } from '../components/Cars'
import { Home } from '../components/Home'
import { Layout } from '../layouts/Layout'

export const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/cars' element={<Cars />} />
        </Route>
    )
)

  return (
    <RouterProvider router={router} />
  )
}
