import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Posts from './components/Posts/Posts';
import Ditalse from './components/Ditalse/Ditalse';

const router = createBrowserRouter([
{
  path:'/',
  element:<Home></Home>,
  children:[
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/posts',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Posts></Posts>
    },
    {
      path:`/posts/:userId`,
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
      element:<Ditalse></Ditalse>
    }

  ]
}
]);



  
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
