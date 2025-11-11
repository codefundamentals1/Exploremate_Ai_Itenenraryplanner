import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import { Sidebar } from 'flowbite-react'
import Headercont from './components/MainPage/Headercont.jsx'
import BannerPage from './components/BannerPage.jsx'
import Mainpage from './components/MainPage/Mainpage.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Citiescont from './components/Citiescont.jsx'
import Newtrip from './components/Newtrip.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      {/* <Route path='' element={ <Citiescont/> }/> */}
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='sidebar' element={<Sidebar />} />
      <Route path='main' element={<Newtrip />} />
      <Route path='main/details' element={<Mainpage />} />
   </Route>



  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
