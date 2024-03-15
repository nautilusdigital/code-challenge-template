import React from 'react';
import {
  Route, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider,
  Navigate,
} from 'react-router-dom';
import { CacheProvider } from './context';
import {
  Cases, Contacts, CreateCase, CreateContact,
} from './pages';
import { PATH } from './utils';

const Layout = () => (
  <CacheProvider>
    <Outlet />
  </CacheProvider>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        path={PATH.get('CONTACT').URL}
        element={<Contacts />}
      />
      <Route
        path={PATH.get('CREATE_CONTACT').URL}
        element={<CreateContact />}
      />
      <Route
        path={PATH.get('CASES').URL}
        element={<Cases />}
      />
      <Route
        path={PATH.get('CREATE_CASE').URL}
        element={<CreateCase />}
      />
      <Route
        path='*'
        element={<Navigate to={PATH.get('CONTACT').URL} />}
      />
    </Route>,
  ),
);

const Router = () => <RouterProvider router={router} />;

export default Router;
