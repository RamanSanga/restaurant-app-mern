import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home.jsx';
import NotFound from './Pages/NotFound.jsx';
import Success from './Pages/Success.jsx';
import Menu from './Pages/Menu.jsx';
import './App.css'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App