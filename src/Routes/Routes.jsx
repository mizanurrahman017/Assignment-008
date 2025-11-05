import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/App/Apps';
import BookDetails from '../pages/BookDetails/BookDetails';
import Installation from '../pages/Installation/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index : true,
         path: "/",
        Component:Home

      },
      {
       path: "/Apps",
        Component:About 
      },
      {
        path: 'Installation',
        Component:Installation
      },
      {
        path:'/apps/:id',
        Component : BookDetails
      }
    ]
  },
]);