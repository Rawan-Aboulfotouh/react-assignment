import React from 'react';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About'

let Routers = createBrowserRouter([
  { path:'' , element: <Layout/> , children:[
      {path:'Portfolio' , element:<Portfolio/>},
      {path:'Contact' , element:<Contact/>},
      {path:'Home' , element:<Home/>},
      {path:'About' , element:<About/>}
      
      
      
    ]}
])



export default function App() {
  return (
    <div>
      <RouterProvider router={Routers}></RouterProvider>
      
    </div>
  )
}




