import React from 'react'
import Layout from './Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Routes>
      <Route path='/*' element={<Layout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default App