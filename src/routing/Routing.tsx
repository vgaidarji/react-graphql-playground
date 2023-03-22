import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../components/pages/Home'))
const CountriesList = lazy(() => import('../components/Countries/CountriesList'))
const Country = lazy(() => import('../components/Country/Country'))

export const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/countries' element={<CountriesList />} />
          <Route path='/countries/:countrySlug' element={<Country />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routing