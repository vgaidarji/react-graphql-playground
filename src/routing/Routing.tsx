import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const CountriesList = lazy(() => import('../components/Countries/CountriesList'))
const Country = lazy(() => import('../components/Country/Country'))

export const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path='/' key='/' element={<CountriesList />}></Route>
          <Route path='/country' key='/country' element={<Country />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routing