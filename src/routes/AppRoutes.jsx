import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from '../components/Home'
import { Header } from '../layouts/Header'

export const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Header />}>
           <Route index element={<Home />}/>
        </Route>
    )
)

  return (
    <RouterProvider router={router} />
  )
}