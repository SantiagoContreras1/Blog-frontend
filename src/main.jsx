import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from "./pages/Home.jsx"
import PostDetails from './pages/PostDetails';
import CreateComment from './pages/CreateComment';
import EditComment from './pages/EditComment';
import CoursesPost from './pages/CoursesPost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element: <Home/>},
      {path: "/posts/:id", element: <PostDetails/>},
      {path: "comment/:id/edit", element: <EditComment/>},
      { path: "posts/courses/:courseName", element: <CoursesPost/> },
      {path: "posts/:id/comment", element: <CreateComment/>},
      {path: "courses", element: <CoursesPost/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
