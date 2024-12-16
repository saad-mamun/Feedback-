import React from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from './Components/Footer'
import TopNav from './Components/TopNav'
import Home from './Components/HomePage/Home'
import Restaurants from './Components/RestaurantsPage/Restaurants';


function App() {


  return (
    <>
      <BrowserRouter>
      <TopNav/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/restaurants' element={ <Restaurants/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
      

    </>
  )
}

export default App
