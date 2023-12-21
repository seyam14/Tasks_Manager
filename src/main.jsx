import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './layout/Dashboard';
import UserHome from './Pages/UserHome/UserHome';
import Contact from './Pages/Dashboard/Contact/Contact';
import NewTasks from './Pages/Dashboard/NewTasks/NewTasks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element:<Register></Register> ,
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }, 
    ]
  },  
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'newTask',
        element: <NewTasks></NewTasks>
      },
      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
