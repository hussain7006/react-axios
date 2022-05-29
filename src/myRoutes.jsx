import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyDashboard from './screens/Dashboard';


function MyRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<MyDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes;
