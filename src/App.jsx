import React from 'react';
import { useState } from 'react'
//components
import Header from './components/Header'
import Footer from './components/Footer'

//pages
import Home from './pages/Home'
import RoomDetails from './pages/RoomDetails'

//react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RoomProvider from './context/RoomContext';

const router= createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/room/:id',
    element: <RoomDetails />
  }
])
const App = () => {
  return (
    <div>
      <RoomProvider>
      <Header />
      <RouterProvider router={router} />
      <Footer />
      </RoomProvider>
    </div>
  )
};

export default App;