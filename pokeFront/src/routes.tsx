import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home'
import { Pokemon } from './pages/Pokemon'

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/pokemon/:id' element={<Pokemon />} />
        <Route path='*'  element={<Navigate to='/home' />}/>
      </Routes>
    </BrowserRouter>
  )
}
