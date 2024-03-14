import React from 'react';
import {
  Route, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import { CacheProvider } from './context';
import { Contacts } from './pages';

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
        element={<Contacts />}
      />
      <Route
        path='*'
        element={<Contacts />}
      />
    </Route>,
  ),
);

const Router = () => <RouterProvider router={router} />;

export default Router;
