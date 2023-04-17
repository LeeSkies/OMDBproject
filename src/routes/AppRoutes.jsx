import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
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
        <Route path='/restaurant/' element={<SingleDisplayLayout />} >
          <Route path='/restaurant/:id' element={<Restaurant />}  />
          <Route path='/restaurant/e/:req/:id?' element={<EditPage />} />
        </Route>
      </Route>
    )
)

  return (
    <RouterProvider router={router} />
  )
}
