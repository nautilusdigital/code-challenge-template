import React from 'react';
import {
  Route, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate,
} from 'react-router-dom';
import { CacheProvider } from './context';
import {
  Dashboard, Login, SignUp,
} from './pages';
import { Example } from './pages/Example';
import { PATH } from './utils/path';

const Layout = () => (
  <CacheProvider>
    <Outlet />
  </CacheProvider>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        path={PATH.get('DASHBOARD')?.URL}
        element={<Dashboard />}
      />
      <Route
        path={PATH.get('EXAMPLE')?.URL}
        element={<Example />}
      />

      {/* Unprotected Routes */}
      <Route
        path={PATH.get('LOGIN')?.URL}

        element={<Login />}
      />
      <Route
        path={PATH.get('SIGN_UP')?.URL}

        element={<SignUp />}
      />
      <Route
        path='*'
        element={<Navigate to={PATH.get('LOGIN')?.URL || ''} />} // Redirect to 404 or Login page
      />
    </Route>,
  ),
);

const Router = () => <RouterProvider router={router} />;

export default Router;
