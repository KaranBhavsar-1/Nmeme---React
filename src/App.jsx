import { useState } from 'react'
import './App.css'
import Home from './Component/HomePage/Home'
import Browse from './Component/BrowsePage/Browse'
import LikedMemePage from './Component/LikedPage/LikedMemePage'
import Settings from './Component/Settings/Settings'
import NavBar from './Component/NavBar/NavBar'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'

function App() {
  return (
    <>
    <NavBar/>
    <h1 className='font-bold italic bg-gray-400 text-white rounded w-1/6 m-auto px-2 py-2 text-2xl'>Hello</h1>
    </>
  )
}

export default App
