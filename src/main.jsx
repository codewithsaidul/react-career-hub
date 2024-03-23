import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import { Root } from './components/root/Root';
import { Home } from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { FeaturedJobs } from './components/featuredJobs/FeaturedJobs';
import { JobDetails } from './components/jobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJobs/>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "/jobs",
        element: <FeaturedJobs/>
      },
      {
        path: "/job/:id",
        element: <JobDetails/>,
        loader: () => fetch ('/jobs.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
