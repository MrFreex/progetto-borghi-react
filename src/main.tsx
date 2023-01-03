import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      {/*
      <Route path='signup' element={<Signup />} />
      <Route path='app-info' element={<AppInfo />} />
      <Route path='verify' element={<Scanned />} />
      <Route path='panel'>
        <Route index element={<Panel />} />
        <Route path='events'>
          <Route index element={<Events />} />
          <Route path='edit/:eventId' element={<EditEvent />} />
        </Route>
      </Route>
      */}
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    { /* <Container> */ }
      <RouterProvider router={router} />
    { /* </Container> */ }
    { /* Footer */ }
  </React.StrictMode>,
)
