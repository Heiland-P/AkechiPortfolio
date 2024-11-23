import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import TitlePage from './pages/TitlePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<TitlePage />} />
  )
)


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App