import React from 'react';
import {
  Route, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import { CacheProvider } from './context';
import { Dashboard } from './pages';
import { Example } from './pages/Example';

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
      <Route
        path='/example'
        element={<Example />}
      />
      <Route
        path='*'
        element={<Dashboard />}
      />
    </Route>,
  ),
);

const Router = () => <RouterProvider router={router} />;

export default Router;
