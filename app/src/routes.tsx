import React from 'react';
import {
  Route, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import { CacheProvider } from './context';
import { Dashboard, Login, SignUp } from './pages';

const Layout = () => (
  <CacheProvider>
    <Outlet />
  </CacheProvider>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        path='/'
        element={<Dashboard />}
      />

      {/* Unprotected Routes */}
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/signup'
        element={<SignUp />}
      />
      <Route
        path='*'
        element={<Login />} // Redirect to 404 or Login page
      />
    </Route>,
  ),
);

const Router = () => <RouterProvider router={router} />;

export default Router;
