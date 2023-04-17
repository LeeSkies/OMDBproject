import { useDispatch } from 'react-redux'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams } from 'react-router-dom'
import { Home } from '../components/Home'
import { MainLayout } from '../layouts/MainLayout'
import { SingleDisplayLayout } from '../layouts/SingleDisplayLayout'
import { actions } from '../features/restaurantssSlice'
import { Restaurant } from '../components/Restaurant'
import { EditPage } from '../components/EditPage'

export const AppRoutes = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />}/>
        </Route>
        <Route path='/restaurant/:id' element={<SingleDisplayLayout />} >
          <Route index element={<Restaurant />}  />
        </Route>
        <Route path='/edit/:id' element={<EditPage />} />
      </Route>
    )
)

  return (
    <RouterProvider router={router} />
  )
}
